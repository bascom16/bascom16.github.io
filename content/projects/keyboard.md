---
title: "IEEE Club Keyboard"
date: "2025-07-01"
description: "Custom split keyboard built as the 2024-2025 IEEE BYU chapter project, with ZMK firmware and custom key layers."
tags: ["hardware", "firmware", "pcb"]
github: "https://github.com/bascom16/zmk_clacken"
---

![Keyboard](/projects/keyboard_full.png)

The 2024-2025 IEEE BYU chapter project consisted of creating custom keyboards.
Hardware and software were based on a personal project previously completed by [Carter Pollan](https://github.com/Virginia2244) (IEEE BYU chapter then-vice president).

I began this project at the beginning of my sophomore year of college, and I quickly learned that it was far beyond the reach of my current skill level. Thanks to the help of Carter and other IEEE members, I was able to complete it by the end of the year.

## Hardware

This project was my first introduction to PCBs and surface mount soldering.

The PCB was completed as a group project with three other sophomore-level students. Using a provided template, we learned how to add the nets and traces required to implement a diode matrix and connect to our SEEED XIAO-SENSE microcontroller.

Once the PCBs were delivered, we spent a long time soldering the diodes and hotswap sockets in place. The microcontroller also provided a challenge. To make it replaceable, we soldered a makeshift socket to the board and wire to the actual pins. I was not very good at soldering this, so I also learned quite a few desoldering techniques.

After that, the assembly was fairly straightforward. After attaching the battery, 3D-printing a case, and screwing the PCB in place, attaching the keys was all that was left. I was quite happy with the outcome given my inexperience.

## Software

With hardware complete, I moved to software and customization. Following Carter's example, I forked his repository of ZMK, an open source firmware for keyboards. Thanks to him, all that was required for a functioning keyboard was modifying the overlays to match our PCB. However, I chose to modify the keyboard layers to better meet my preferences.

All files are available on my [Github Repository](https://github.com/bascom16/zmk_clacken).

### Keyboard Layers

**Standard Layout**

| Q | W | E | R | T |   | Y | U | I | O | P |
|---|---|---|---|---|---|---|---|---|---|---|
| A | S | D | F | G |   | H | J | K | L | ; |
| Z | X | C | V | B |   | N | M | , | . | / |
|   |   | NUM | FN | CMD |   | ENTER | BKSP | SPACE |   |   |

To make up for the reduced number of keys, we employ homerow mods and two keys mapping to different layers.

- **Homerow mods:** holding select keys enables an alternate function. This provides easy access to modifiers like Shift and Control.
- **Number:** This key provides access to number keys and mathematical notation.
- **Function:** This key provides access to function keys and other common keyboard functions like Caps Lock and Arrow keys.

**Homerow Mods Layer** (hold a home row key to activate)

| ESC | W | E | R | T |   | Y | U | I | O | P |
|---|---|---|---|---|---|---|---|---|---|---|
| SHIFT | TAB | CTRL | OPT | CMD |   | CMD | OPT | CTRL | TAB | SHIFT |
| Z | X | C | V | B |   | N | M | , | . | / |
|   |   | NUM | FN | CMD |   | ENTER | BKSP | SPACE |   |   |

**Number Layer** (hold `NUM`)

| 1 | 2 | 3 | 4 | 5 |   | 6 | 7 | 8 | 9 | 0 |
|---|---|---|---|---|---|---|---|---|---|---|
| SHIFT | TAB | CTRL | OPT | CMD |   | ` | [ | ] |   | ' |
|   |   |   |   |   |   |   | - | = | \ | / |
|   |   | **NUM** | FN | CMD |   | SHIFT | BKSP | SPACE |   |   |

**Function Layer** (hold `FN`)

| F1 | F2 | F3 | F4 | F5 |   | F6 | F7 | F8 | F9 | F10 |
|---|---|---|---|---|---|---|---|---|---|---|
| SHIFT | TAB | CTRL | OPT | CMD |   | ← | ↓ | ↑ | → | F11 |
| PRTSC | CAPS |   |   |   |   | PG UP | PG DN | HOME | END | F12 |
|   |   | NUM | **FN** | CMD |   | ENTER | DEL | SPACE |   |   |

### Configuration

This custom key formation is programmed into a `.keymap` file. Modifications to the keymap can be made by reflashing the SEEED-XIAO microcontrollers.

```
/ {

    behaviors {
        bhm: balanced_homerow_mods {
            compatible = "zmk,behavior-hold-tap";
            #binding-cells = <2>;
            tapping-term-ms = <200>;
            quick-tap-ms = <0>;
            require-prior-idle-ms = <0>;
            flavor = "balanced";
            bindings = <&kp>, <&kp>;
        };
        combos {
            compatible = "zmk,combos";
            combo_esc {
                timeout-ms = <50>;
                key-positions = <0 10>;
                bindings = <&kp ESC>;
            };
            combo_ble {
                timeout-ms = <50>;
                key-positions = <30 35>;
                bindings = <&mo BLUETOOTH>;
            };
        };
    };

    keymap0: keymap0 {
        compatible = "zmk,keymap";

        default_layer { // Layer 0
            display-name = "Base";
            bindings = <
        &bhm ESC Q      &kp W       &kp E           &kp R           &kp T           &kp Y           &kp U       &kp I           &kp O       &kp P
        &bhm LSHIFT A   &bhm TAB S  &bhm LCTRL D    &bhm LALT F     &bhm LCMD G     &bhm RCMD H     &bhm RALT J &bhm RCTRL K    &bhm TAB L  &bhm RSHIFT SEMI
        &kp Z           &kp X       &kp C           &kp V           &kp B           &kp N           &kp M       &kp COMMA       &kp DOT     &kp FSLH
                                    &mo NUMBER      &mo FUNCTION    &kp LCMD        &kp RET         &kp BSPC    &kp SPACE
            >;
        };

        function {
            display-name = "Function";
            bindings = <
                    &kp F1      &kp F2      &kp F3      &kp F4      &kp F5      &kp F6      &kp F7      &kp F8      &kp F9      &kp F10
                    &kp LSHIFT  &kp TAB     &kp LCTRL   &kp LALT    &kp LCMD    &kp LEFT    &kp DOWN    &kp UP      &kp RIGHT   &kp F11
                    &kp PSCRN   &kp CAPS    &none       &none       &none       &kp PG_UP   &kp PG_DN   &kp HOME    &kp END     &kp F12
                                            &trans      &trans      &trans      &trans      &kp DEL     &trans
            >;
        };

        number {
            display-name = "Number";
            bindings = <
                    &kp N1      &kp N2      &kp N3      &kp N4      &kp N5          &kp N6      &kp N7      &kp N8      &kp N9      &kp N0
                    &kp LSHIFT  &kp TAB     &kp LCTRL   &kp LALT    &kp LCMD        &kp GRAVE   &kp LBRC    &kp RBRC    &none       &kp SQT
                    &none       &none       &none       &none       &none           &none       &kp MINUS   &kp EQUAL   &kp BSLH    &kp FSLH
                                            &trans      &trans      &trans          &kp LSHIFT  &trans      &trans
            >;
        };

    };
};
```

While this unique setup takes time to get used to, I have found that it can help me speed up my programming by keeping my hands on the keyboard.

I am currently working on an alternate keymap inspired by the [Miryoku](https://github.com/manna-harbour/miryoku) layout.
