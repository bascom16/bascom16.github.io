# Rust Demos [:simple-git:](https://github.com/bascom16/Rust-Demos){ .md-button .md-button--small }

This Rust demonstration teaches the basic principles of Rust following the pattern of the Rust Book. In the future, I hope to create more demos teaching various principles or resources in Rust. Source code on [Github](https://github.com/bascom16/Rust-Demos).

---

This demonstration is based on principles taught in the [Rust Book](https://doc.rust-lang.org/book/title-page.html#the-rust-programming-language). Links to relevant chapters are included with each section.

## Cargo

> [Chapter 1: Getting Started](https://doc.rust-lang.org/book/ch01-00-getting-started.html)

Install Rust using [rustup](https://www.rust-lang.org/tools/install).

To create a new project with cargo, Rust's package manager, use the `new` command in the terminal:

    $ cargo new [project_name]

Use the `build` command to compile your code.

    $ cargo build

Use the `run` command to compile and then run the executable.

    $ cargo run

## Variables

> [Chapter 3: Common Programming Concepts](https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html)

`let` creates an immutable variable.

'drone_id' is an immutable 32-bit integer (`i32`). Note that `u32` could be used to declare an unsigned 32-bit integer.

```rust
let drone_id: i32 = 1;
```

To change a variable, declare it as mutable with `mut`.

'drone_status' is a mutable `String` (type is inferred).

```rust
let mut drone_status = "Unarmed";
drone_status = "Armed";
```

## Functions
Functions are declared with keyword `fn`. Every executable begins at the `main` function.

A "hello world" program:

```rust
fn main() {
    println!("Hello, world!");
}
```

Parameters and a return type may be included in the function signature. 

```rust
fn function(param: i32) -> f32 {}
```

Example 1: a 'log_message" function with a parameter of type `String`.

```rust
fn log_message(message: String) {
    println!("[LOG]: {}", message)
}
```

Example 2: An 'average' function with two parameters and a return type of `f32` (32-bit float).

```rust
fn average(x: f32, y:f32) -> f32 {
    (x + y) / 2.0
}
```

Note that a `return` statement is not necessary. Any expression on the last line will act as a return value.

## Ownership

> [Chapter 4: Understanding Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)

Each value has a specific owner. Ownership can be passed from function to function to guarantee memory safety.

Variable 'm1' is a String stored on the heap. When it is passed to 'log_message', ownership is passed to 'log_message'. Another call using 'm1' would result in a compiler error.

```rust
let m1 = String::from("Armed!");
    log_message(m1);

    // println!("{}", m1);
    // Would result in compiler error
```

## Structs 

> [Chapter 5: Using Structs to Structure Related Data](https://doc.rust-lang.org/book/ch05-00-structs.html)

Structs allow for custom data types. Structs are defined with a name and `key: value` pairs where each 'key' is a name that point to a field of type 'value'.

```rust
struct UAV {
    id: u32,
    is_armed: bool,
    altitude: f32
}
```

Values are accessed using dot notation.

    uav.id, uav.is_armed, uav.altitude

## References

> [Chapter 4: Understanding Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)

References control how data is shared and accessed. Immutable references (`&`) are passed to functions that only read data. Mutable references (`&mut`) are passed to functions that also need to write data. The compiler ensures that mutable and immutable references cannot coexist.

The function 'arm_vehicle' takes a mutable reference.

```rust
fn arm_vehicle(uav: &mut UAV) {
    uav.is_armed = true;
}
```

## Crates

> [Chapter 7: Managing Growing Projects with Packages, Crates, and Modules](https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html)

The `cargo.toml` file keeps track of project dependencies and information.

```toml
[package]
name = "demo2"
version = "0.1.0"
edition = "2024"

[dependencies]
```

Use `cargo add [crate]` to add a crate to the project. Cargo will automatically add this crate to the project depencencies.

For example, we'll add the `rand` crate.

    $ cargo add rand

This will add the `rand` crate to our `cargo.toml` file.

```toml
[dependencies]
rand = "0.9.1"
```

To add items from a crate to a project, add a line with the `use` keyword and crate structure to the file (`use [crate]::[item]`). We'll add `random_bool` (a function within the `rand` crate).

```rust
use rand::random_bool;
```

Individual functions can also be called using the crate structure inline. For example, the `random_range` function can be called with

```rust
rand::random_range(..)
```

Information about specific crates can be found at [crates.io](https://crates.io).

## Error Handling

>[Chapter 9: Error Handling](https://doc.rust-lang.org/book/ch09-00-error-handling.html)

Rust does not support null values. `Option<T>`, a standard library enum, can represent a value that can be something or nothing. The compiler forces you to handle both cases in order to prevent bugs.

```rust
enum Option<T> {
    None,
    Some(T),
}
```

Potential failure can be handled in a similar manner. The Rust compiler forces you to acknowledge the possibility of error in some cases. Recoverable errors are represented with the `Result<T, E>` type.

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Unrecoverable errors cause code to panic! They can be caused by code execution or explicity called with the `panic!` macro.

## Pattern Matching

>[Chapter 6: Enums and Pattern Matching](https://doc.rust-lang.org/book/ch06-00-enums.html)

`match` is a control flow construct used to execute code by comparing a value to a pattern. It can be used to handle values with `Option` or `Result`.

```rust
match my_result {
    Ok(t) => // success code using 't'
    Err(e) => // error code using 'e'
}
```

Matches are exhaustive. They must cover all possibilities.

For example, we can use a `match` statement to handle sensor input.
 
```rust
match read_sensor() {
    Ok(altitute) => {
        drone.altitude = altitute;
        println!("Drone {} Altitude read as {}", drone.id, altitute);
    }
    Err(e) => {
        println!("Failed! Error: {}", e);
    }
}
```

## Generic Types and Traits

>[Chapter 10: Generic Types, Traits, and Lifetimes](https://doc.rust-lang.org/book/ch10-00-generics.html)

Rust uses generic types and traits to handle duplication of concepts. 

Generics are abstract stand-ins for specific types. For example, `Option<T>` contains a generic type `T`. Similarly, `Result<T,E>` contains two generic types `T` and `E`. The Rust compiler will fill in the abstracted types with specific types at compile time, meaning there is no lost runtime efficiency.

Traits can be used to define shared behavior and functionality. For example, in the Rust standard library the `Debug` trait will indicate that an object has formatted output for a debugging context.

```rust
pub trait Debug {
    // Required method
    fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error>;
}
```

An implementation of the Debug trait can be achieved with the `#[derive(Debug)]` macro or a manual implementation.

## Resources

All information in this demo is based on the [Rust Book](https://doc.rust-lang.org/book/title-page.html#the-rust-programming-language) from chapters 1-10. Much more detail and further information can be found there. It is very helpful for understanding why the Rust language and compiler behave as they do.

Other resources

- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) teaches Rust's basic principles with runnable examples.

- [Rustlings](https://github.com/rust-lang/rustlings) contains small activities to practice reading and writing Rust code.

- Official documentation and other resources for learning Cargo, the compiler, embedded Rust, and more are provided by the Rust Foundation at the [Rust Learn](https://www.rust-lang.org/learn) page.

- To learn Rust at a deeper level, Google's Android team has created a free Rust course called [Comprehensive Rust](https://google.github.io/comprehensive-rust/). This course was created for experienced software engineers typically with a background in C++ or Java. 
