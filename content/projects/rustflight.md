---
title: "RustFlight"
date: "2025-08-01"
hideDate: true
description: "Rust-based port of the ROSflight firmware for UAV flight control, developed at the BYU MAGICC Lab in collaboration with AeroVironment."
tags: ["rust", "embedded", "robotics", "research"]
github: ""
demo: "https://rosflight.org"
demoLabel: "ROSflight"
---

I am currently working in the BYU Multiple Agent Intelligent Coordination and Control [(MAGICC) Lab](https://magicc.byu.edu) as a research assistant. I started in this position in April 2025 as a part of the [IMMERSE Program](https://immerse.byu.edu/about-immerse) under Dr. James Usevitch.

[![MAGICC Lab](/magicc_logo.svg)](https://magicc.byu.edu)

## About ROSflight and RustFlight

[ROSflight](https://rosflight.org) is an open-source UAV flight control firmware designed for embedded hardware. Built with research in mind, it provides a lightweight, ROS2-integrated stack that keeps the flight controller simple while offloading higher-level computation to a companion computer. ROSflight's clean separation of concerns makes it well-suited for academic research and custom autonomy experiments.

RustFlight is a Rust-based port of the `rosflight_firmware` codebase. The project preserves ROSflight's research-friendly architecture while leveraging Rust's safety and expressiveness guarantees, factors that matter enormously in safety-critical embedded systems like UAVs.

---

## Why Rust for UAVs?

UAV firmware demands correctness. A memory bug or invalid state transition does not produce a crash log — it produces a crash. Rust addresses this through language-level guarantees that eliminate entire classes of bugs before a line of firmware ever runs on hardware.

**Compile-time safety.** Rust's type system enforces correctness at compile time. Invalid state transitions, unit mismatches, and misused interfaces become compiler errors rather than runtime failures. This shifts the cost of bugs from the flight field to the development environment.

**Memory safety without a garbage collector.** The borrow checker statically enforces ownership and lifetime rules, eliminating data races, use-after-free errors, and null pointer dereferences — without the unpredictable pauses of a garbage collector. This is essential for real-time embedded systems where timing guarantees matter.

**Understandable code.** Rust's expressive pattern matching, algebraic types, and trait system produce code that is more readable and maintainable than equivalent C or C++. For a research codebase that needs to be understood and extended by new contributors, this has practical value.

### Type-Based State Machines

A prime example of Rust's safety and expressiveness in action is a type-based state machine I developed for the flight controller. This state machine utilizes Rust's *type-state pattern*, described described by Alfred Weirich in [*Generic Finite State Machines with Rust's Type-State Pattern*](https://medium.com/@alfred.weirich/generic-finite-state-machines-with-rusts-type-state-pattern-04593bba34a8). This pattern is used to encode the current state directly in the type system rather than as a runtime value.

Each state is a distinct type, and the state machine struct carries that type as a generic parameter:

```rust
struct StateA;
struct StateB;

struct Fsm<State> {
    _state: PhantomData<State>
}
```

Transitions are defined as methods on state-specific `impl` blocks. Because each transition returns a new type, the compiler statically prevents any transition that is not explicitly defined:

```rust
impl Fsm<StateA> {
    fn new() -> Self {
        Self { _state: PhantomData }
    }
    fn goto_b(&self) -> Fsm<StateB> {
        Fsm::<StateB> { _state: PhantomData }
    }
}
```

The result is a state machine where invalid transitions are compile errors, not runtime panics. For flight-critical logic such as arming sequences, mode transitions, and sensor initialization, this guarantee is meaningful. *Code examples adapted from Weirich (2024).*

---

![RustFlight quadrotor hardware at the BYU MAGICC Lab](/projects/quadrotor.png)

*Quadrotor hardware used in RustFlight research at the BYU MAGICC Lab.*

---

## Areas of Work

**Hardware assembly.** I have built and assembled quadrotor platforms end-to-end, including mounting flight controllers, calibrating ESCs, wiring sensor arrays, and configuring the onboard computer stack.

**PixRacer Pro board support.** I contributed to writing the board support layer for the PixRacer Pro microcontroller, adapting low-level hardware interfaces to integrate with the RustFlight firmware.

**Communications — MAVLink.** The RustFlight project uses the [MAVLink](https://mavlink.io/en/) protocol for ground station communication and telemetry. I have worked on the communications layer that bridges the flight controller to ground control software, enabling real-time monitoring and command uplink.

**ROS2 simulation with Zenoh.** For software-in-the-loop testing, I integrated the RustFlight stack with ROS2 using [Zenoh](https://zenoh.io/) as a middleware bridge. This setup allows full simulation of flight behavior without physical hardware, accelerating development and reducing risk during early testing.

**Autonomous waypoint flight.** I am currently working on implementing and testing autonomous waypoint navigation using the RustFlight stack, validating guidance and control logic through both simulation and hardware flights.

---

## Future Research

**TinyML.** I am interested in deploying small machine learning models directly on embedded flight hardware for onboard inference. Applications include sensor fusion, anomaly detection, and adaptive control. These tasks that currently require a companion computer but could benefit from lower-latency, lower-power execution at the microcontroller level.

**Embodied AI.** I am exploring the intersection of AI and physical systems through agents that reason and act through interaction with the world rather than in simulation alone. Applied to UAVs, this could mean flight controllers that adapt to changing conditions, learn from experience, and generalize across platforms. Combining embodied AI with the safety guarantees of a Rust-based firmware stack is a direction I plan to pursue.
