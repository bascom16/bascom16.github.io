# IEEE Club Keyboard Project [:simple-git:](https://github.com/bascom16/zmk_clacken){ .md-button .md-button--small }

**FINISHED PRODUCT PICTURE**

The 2024-2025 IEEE BYU chapter project consisted of creating custom keyboards. 
Hardware and software were based on a personal project previously completed by [Carter Pollan](https://github.com/Virginia2244) (IEEE BYU chapter then-vice president).

I began this project at the beginning of my sophomore year of college, and I quickly learned that it was far beyond the reach of my current skill level. Thanks to the help of Carter and other IEEE members, I was able to complete it by the end of the year.

## Hardware

This project was my first introduction to PCBs and surface mount soldering. 

**PCB PICTURE**

The PCB was completed as a group project with three other sophomore-level students. Using a provided template, we learned how to add the nets and traces required to implement a diode matrix and connect to our SEEED XIAO-SENSE microcontroller.

**SOLDERING PICTURE**

Once the PCBs were delivered, we spent a long time soldering the diodes and hotswap sockets in place. The microcontroller also provided a challenge. To make it replaceable, we soldered a makeshift socket to the board and wire to the actual pins. I was not very good at soldering this, so I also learned quite a few desoldering techniques.

**FINISHED PRODUCT PICTURE**

After that, the assembly was fairly straightforward. After attaching the battery, 3D-printing a case, and screwing the PCB in place, attaching the keys was all that was left. I was quite happy with the outcome given my inexperience. 

## Software

With hardware complete, I moved to software and customization. Following Carter's example, I forked his repository of ZMK, an open source firmware for keyboards. Thanks to him, all that was required for a functioning keyboard was modifying the overlays to match our PCB. However, I chose to modify the keyboard layers to better meet my preferences.

All files are available on my [Github Repository](https://github.com/bascom16/zmk_clacken).

### Keyboard Layers

!!! note "Standard Keyboard Layout :material-keyboard:"

    <div class="center" style="overflow-x: auto;">
    <div class="md-typeset__table">
        <table>
        <tbody>
            <tr>
            <td>Q</td>
            <td>W</td>
            <td>E</td>
            <td>R</td>
            <td>T</td>
            <td></td>
            <td>Y</td>
            <td>U</td>
            <td>I</td>
            <td>O</td>
            <td>P</td>
            </tr>
            <tr>
            <td>A</td>
            <td>S</td>
            <td>D</td>
            <td>F</td>
            <td>G</td>
            <td></td>
            <td>H</td>
            <td>J</td>
            <td>K</td>
            <td>L</td>
            <td>;</td>
            </tr>
            <tr>
            <td>Z</td>
            <td>X</td>
            <td>C</td>
            <td>V</td>
            <td>B</td>
            <td></td>
            <td>N</td>
            <td>M</td>
            <td>,</td>
            <td>.</td>
            <td>/</td>
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td style="text-align: center;">:material-numeric:</td>
            <td style="text-align: center;">:material-function:</td>
            <td style="text-align: center;">:material-apple-keyboard-command:</td>
            <td></td>
            <td style="text-align: center;">:material-keyboard-return:</td>
            <td style="text-align: center;">:material-keyboard-space:</td>
            <td style="text-align: center;">:material-backspace:</td>
            <td></td>
            <td></td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>

To make up for the reduced number of keys, we employ homerow mods and two keys mapping to different layers.

* Homerow mods: holding select keys enables an alternate function. This provides easy access to modifiers like Shift and Control.
* Number: This key provides access to number keys and mathematical notation.
* Function: This key provides access to function keys and other common keyboard functions like Caps Lock and Arrow keys.

=== "Homerow mods :material-box-shadow:"

    !!! note ""

        <div class="center" style="overflow-x: auto;">
            <div class="md-typeset__table">
                <table>
                <tbody>
                    <tr>
                    <td style="text-align: center;">:material-keyboard-esc:{ .key-highlight }</td>
                    <td>W</td>
                    <td>E</td>
                    <td>R</td>
                    <td>T</td>
                    <td></td>
                    <td>Y</td>
                    <td>U</td>
                    <td>I</td>
                    <td>O</td>
                    <td>P</td>
                    </tr>
                    <tr>
                    <td style="text-align: center;">:material-apple-keyboard-shift:{ .key-highlight }</td>
                    <td style="text-align: center;">:material-keyboard-tab:{ .key-highlight }</td>
                    <td style="text-align: center;">:material-apple-keyboard-control:{ .key-highlight }</td>
                    <td style="text-align: center;">:material-apple-keyboard-option:{ .key-highlight }</td>
                    <td style="text-align: center;">:material-apple-keyboard-command:{ .key-highlight }</td>
                    <td></td>
                    <td style="text-align: center;">:material-apple-keyboard-command:{ .key-highlight }</td>
                    <td style="text-align: center;">:material-apple-keyboard-option:{ .key-highlight }</td>
                    <td style="text-align: center;">:material-apple-keyboard-control:{ .key-highlight }</td>
                    <td style="text-align: center;">:material-keyboard-tab:{ .key-highlight }</td>
                    <td style="text-align: center;">:material-apple-keyboard-shift:{ .key-highlight }</td>
                    </tr>
                    <tr>
                    <td>Z</td>
                    <td>X</td>
                    <td>C</td>
                    <td>V</td>
                    <td>B</td>
                    <td></td>
                    <td>N</td>
                    <td>M</td>
                    <td>,</td>
                    <td>.</td>
                    <td>/</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td style="text-align: center;">:material-numeric:</td>
                    <td style="text-align: center;">:material-function:</td>
                    <td style="text-align: center;">:material-apple-keyboard-command:</td>
                    <td></td>
                    <td style="text-align: center;">:material-keyboard-return:</td>
                    <td style="text-align: center;">:material-keyboard-space:</td>
                    <td style="text-align: center;">:material-backspace:</td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

=== "Number :material-numeric:"

    !!! note ""

        <div class="center" style="overflow-x: auto;">
        <div class="md-typeset__table">
            <table>
            <tbody>
                <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td></td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>0</td>
                </tr>
                <tr>
                <td style="text-align: center;">:material-apple-keyboard-shift:</td>
                <td style="text-align: center;">:material-keyboard-tab:</td>
                <td style="text-align: center;">:material-apple-keyboard-control:</td>
                <td style="text-align: center;">:material-apple-keyboard-option:</td>
                <td style="text-align: center;">:material-apple-keyboard-command:</td>
                <td></td>
                <td>`</td>
                <td>[</td>
                <td>]</td>
                <td></td>
                <td>'</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>-</td>
                <td>=</td>
                <td>\</td>
                <td>/</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td class="highlight-cell", style="text-align: center;">:material-numeric:{ .key-highlight }</td>
                <td style="text-align: center;">:material-function:</td>
                <td style="text-align: center;">:material-apple-keyboard-command:</td>
                <td></td>
                <td style="text-align: center;">:material-apple-keyboard-shift:</td>
                <td style="text-align: center;">:material-backspace:</td>
                <td style="text-align: center;">:material-keyboard-space:</td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

=== "Function :material-function:"

    !!! note ""

        <div class="center" style="overflow-x: auto;">
        <div class="md-typeset__table">
            <table>
            <tbody>
                <tr>
                <td style="text-align: center;">:material-keyboard-f1:</td>
                <td style="text-align: center;">:material-keyboard-f2:</td>
                <td style="text-align: center;">:material-keyboard-f3:</td>
                <td style="text-align: center;">:material-keyboard-f4:</td>
                <td style="text-align: center;">:material-keyboard-f5:</td>
                <td></td>
                <td style="text-align: center;">:material-keyboard-f6:</td>
                <td style="text-align: center;">:material-keyboard-f7:</td>
                <td style="text-align: center;">:material-keyboard-f8:</td>
                <td style="text-align: center;">:material-keyboard-f9:</td>
                <td style="text-align: center;">:material-keyboard-f10:</td>
                </tr>
                <tr>
                <td style="text-align: center;">:material-apple-keyboard-shift:</td>
                <td style="text-align: center;">:material-keyboard-tab:</td>
                <td style="text-align: center;">:material-apple-keyboard-control:</td>
                <td style="text-align: center;">:material-apple-keyboard-option:</td>
                <td style="text-align: center;">:material-apple-keyboard-command:</td>
                <td></td>
                <td style="text-align: center;">:material-chevron-left:</td>
                <td style="text-align: center;">:material-chevron-down:</td>
                <td style="text-align: center;">:material-chevron-up:</td>
                <td style="text-align: center;">:material-chevron-right:</td>
                <td style="text-align: center;">:material-keyboard-f11:</td>
                </tr>
                <tr>
                <td style="text-align: center;">:material-monitor-screenshot:</td>
                <td style="text-align: center;">:material-apple-keyboard-caps:</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: center;">:material-pan-up:</td>
                <td style="text-align: center;">:material-pan-down:</td>
                <td style="text-align: center;">:material-page-first:</td>
                <td style="text-align: center;">:material-page-last:</td>
                <td style="text-align: center;">:material-keyboard-f12:</td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td style="text-align: center;">:material-numeric:</td>
                <td class="highlight-cell", style="text-align: center;">:material-function:{ .key-highlight }</td>
                <td style="text-align: center;">:material-apple-keyboard-command:</td>
                <td></td>
                <td style="text-align: center;">:material-keyboard-return:</td>
                <td style="text-align: center;">:material-backspace-reverse:</td>
                <td style="text-align: center;">:material-keyboard-space:</td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

### Configuration

This custom key formation is programmed into a .keymap file. Modifications to the keymap can be made by reflashing the SEEED-XIAO microcontrollers.

??? ".keymap selection"

    ```
    -------------- *** --------------

    ...

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

            ...

        };
    };

    -------------- *** --------------
    ```

While this unique setup takes time to get used to, I have found that it can help me speed up my programming by keeping my hands on the keyboard.


