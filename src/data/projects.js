import firstTouchImg from "../media/first_touch_img.webp";
import lattepandaImg from "../media/lattepanda_carrier.png";
import smartBlindsImg from "../media/smart_blinds.png";
import aiRoverImg from "../media/ai_robot_rover.png";
import solarMpptImg from "../media/solar_mppt.png";

const projects = [
  {
    id: "secure-usb-module",
    title: "Secure USB Option Module",
    category: "work",
    company: "Dell Technologies",
    image: null,
    summary:
      "A hardware security module enabling USB port control and management for enterprise Dell systems.",
    content: [
      {
        type: "paragraph",
        text: "The Secure USB Option Module is a hardware/software solution designed to give enterprise IT administrators granular control over USB device interactions at the system level."
      },
      {
        type: "paragraph",
        text: "As a hardware engineer on this project, I was responsible for schematic capture, PCB layout, and board-level validation. The module integrates with Dell's enterprise platform architecture, enabling features such as USB port lockdown, device whitelisting, and real-time monitoring of connected peripherals."
      },
      {
        type: "heading",
        text: "Key Contributions"
      },
      {
        type: "list",
        items: [
          "Designed the schematic and PCB layout using Cadence OrCAD and Allegro",
          "Performed signal integrity analysis on high-speed USB data lines",
          "Validated prototypes through functional testing and environmental stress screening",
          "Collaborated with firmware and software teams to define the hardware-software interface",
          "Supported the transition from prototype to mass production"
        ]
      },
      {
        type: "paragraph",
        text: "This work resulted in two U.S. patent applications (US 20250335642 A1 and US 20250390614 A1), both currently pending."
      }
    ],
    images: []
  },
  {
    id: "contextual-awareness-svt",
    title: "Contextual Awareness Project — SVT",
    category: "work",
    company: "Dell Technologies",
    image: null,
    summary:
      "System validation testing for Dell's contextual awareness platform, covering hardware-software integration.",
    content: [
      {
        type: "paragraph",
        text: "The Contextual Awareness project leverages a combination of sensors and software algorithms to enable Dell systems to intelligently respond to their environment — detecting user presence, proximity, and attention."
      },
      {
        type: "paragraph",
        text: "As part of the System Validation Testing (SVT) team, I was responsible for verifying the end-to-end functionality of the hardware-software integration across multiple system configurations."
      },
      {
        type: "heading",
        text: "Key Contributions"
      },
      {
        type: "list",
        items: [
          "Developed and executed comprehensive test plans covering sensor accuracy, power consumption, and system response times",
          "Validated capacitive sensing hardware across varying environmental conditions (temperature, humidity, EMI)",
          "Identified and documented hardware-level defects, working closely with design engineers to drive root cause analysis",
          "Automated portions of the test workflow using Python scripts to improve test coverage and efficiency",
          "Provided feedback to the design team that influenced sensor placement and shielding strategies"
        ]
      },
      {
        type: "paragraph",
        text: "The project required close collaboration across hardware, firmware, mechanical, and software teams to ensure the feature met Dell's quality and performance standards."
      }
    ],
    images: []
  },
  {
    id: "first-touch-indoor-soccer",
    title: "Indoor Soccer Scoreboard and Queue System",
    category: "personal",
    image: firstTouchImg,
    summary:
      "Custom built hardware/software system for First Touch Indoor Soccer — team sign-up, queue management, and live scoreboard display.",
    content: [
      {
        type: "paragraph",
        text: "This is a custom-built hardware and software system designed for First Touch Indoor Soccer, a local indoor soccer facility."
      },
      {
        type: "paragraph",
        text: "The system addresses a common problem at recreational sports venues: managing field time, team queues, and scorekeeping in a simple, visible way for both staff and customers."
      },
      {
        type: "heading",
        text: "Planned Features"
      },
      {
        type: "list",
        items: [
          "Team sign-up interface — allows teams to register for field time via a tablet or kiosk",
          "Queue management — automatically manages the order of play and displays upcoming matches",
          "Live scoreboard — displays the current score on a TV visible to all customers, with manual score update controls for staff",
          "Admin dashboard — provides facility staff with an overview of field usage, queue status, and match history"
        ]
      },
      {
        type: "heading",
        text: "Technical Approach"
      },
      {
        type: "table",
        headers: ["Component", "Technology", "Details"],
        rows: [
          ["Controller", "Raspberry Pi", "Main compute unit connected to display output"],
          ["Frontend", "Web App", "Team registration and queue management interface"],
          ["Scoreboard", "HDMI Display", "TV-mounted live score and queue display"],
          ["Communication", "WebSockets", "Real-time updates between interfaces"]
        ]
      },
      {
        type: "paragraph",
        text: "This project is currently in the planning and early development phase. Architecture diagrams and implementation details will be added as the build progresses."
      }
    ],
    images: []
  },
  {
    id: "lattepanda-mu-carrier",
    title: "Custom LattePanda Mu Carrier Board",
    category: "personal",
    image: lattepandaImg,
    summary:
      "A custom-designed carrier board for the LattePanda Mu x86 compute module (Intel N100), featuring tailored I/O, power delivery, and high-speed interfaces.",
    content: [
      {
        type: "paragraph",
        text: "The LattePanda Mu is a compact x86 compute module powered by an Intel N100 processor, featuring a 260-pin SO-DIMM edge connector that exposes PCIe 3.0, USB 3.2, HDMI 2.1, SATA, GPIO, and more. This project involves designing a custom carrier board from scratch to break out and utilize these interfaces for a specific application."
      },
      {
        type: "paragraph",
        text: "Rather than using the off-the-shelf evaluation carrier board, the goal is to design a purpose-built, compact carrier that demonstrates end-to-end ECAD skills — from schematic capture through PCB layout, fabrication, and bring-up."
      },
      {
        type: "heading",
        text: "High-Level Architecture"
      },
      {
        type: "table",
        headers: ["Block", "Description"],
        rows: [
          ["Compute Module", "LattePanda Mu (Intel N100, 8GB LPDDR5, 64GB eMMC) via 260-pin SO-DIMM socket"],
          ["Power Supply", "12V barrel jack input → multi-rail DC-DC (5V, 3.3V, 1.8V) with sequencing and soft-start"],
          ["Display", "HDMI 2.1 output with ESD protection and impedance-controlled routing"],
          ["USB", "2× USB 3.2 Type-A, 1× USB-C (data + PD sink) with re-driver ICs"],
          ["Storage", "M.2 M-key slot (NVMe SSD via PCIe 3.0 x4)"],
          ["Networking", "Gigabit Ethernet (Intel I226-V) with onboard magnetics"],
          ["Expansion", "40-pin GPIO header for custom peripherals, I2C, SPI, UART"]
        ]
      },
      {
        type: "heading",
        text: "Execution Plan"
      },
      {
        type: "list",
        items: [
          "Phase 1 — Schematic capture in Altium Designer, starting with power tree and high-speed interfaces",
          "Phase 2 — 6-layer PCB layout with controlled impedance stackup for PCIe/USB/HDMI differential pairs",
          "Phase 3 — Design review, DRC/ERC, and generate Gerbers + BOM for fabrication (JLCPCB/PCBWay)",
          "Phase 4 — Board assembly (reflow + hand soldering for fine-pitch components)",
          "Phase 5 — Bring-up and validation: power rail verification, signal integrity checks with oscilloscope, boot test"
        ]
      },
      {
        type: "heading",
        text: "Key Design Challenges"
      },
      {
        type: "list",
        items: [
          "High-speed signal integrity — length matching and impedance control for PCIe 3.0 and USB 3.2 differential pairs",
          "Power sequencing — proper voltage rail startup order required by the Intel N100 platform",
          "HSIO coupling capacitors — the LattePanda Mu does not include series AC-coupling caps on HSIO pins, so these must be placed on the carrier board",
          "Thermal management — adequate copper pours and thermal vias to handle the N100's TDP",
          "Compact form factor — targeting a board size suitable for embedded and edge computing applications"
        ]
      },
      {
        type: "heading",
        text: "Tools"
      },
      {
        type: "list",
        items: [
          "Altium Designer — schematic capture and PCB layout",
          "LTspice — power supply simulation and loop stability analysis",
          "Saturn PCB Toolkit — impedance and via current calculations",
          "JLCPCB / PCBWay — PCB fabrication and SMT assembly"
        ]
      }
    ],
    images: []
  },
  {
    id: "smart-blind-controller",
    title: "AutoShade — Smart Window Blind Controller",
    category: "personal",
    image: smartBlindsImg,
    summary:
      "A retrofit smart blind actuator with battery, USB-C, or solar power. Multiple units connect to a central hub via Zigbee/Matter for home automation integration.",
    content: [
      {
        type: "paragraph",
        text: "AutoShade is a compact motorized actuator designed to retrofit onto existing roller blinds and shutter windows, converting them into smart blinds without replacing the entire window treatment. Each unit clamps onto the blind mechanism and provides motorized open/close control."
      },
      {
        type: "paragraph",
        text: "The system is designed around a hub-and-node architecture: multiple blind actuators communicate wirelessly with a central hub, which bridges to your phone and existing smart home ecosystem via standard home automation protocols."
      },
      {
        type: "heading",
        text: "System Architecture"
      },
      {
        type: "table",
        headers: ["Component", "Technology", "Details"],
        rows: [
          ["Actuator MCU", "ESP32-C6", "Low-power SoC with native Zigbee/Thread and BLE support"],
          ["Motor", "12V DC gear motor", "Quiet operation with torque sufficient for standard roller blinds"],
          ["Motor Driver", "DRV8837", "Low-side H-bridge with sleep mode for battery conservation"],
          ["Power Options", "Li-Ion battery / USB-C / Solar", "Onboard BQ25185 charger IC with MPPT for solar input"],
          ["Hub", "ESP32-S3 + Ethernet", "Central coordinator running Zigbee2MQTT, bridging to Home Assistant"],
          ["Protocol", "Zigbee 3.0 / Matter", "Mesh networking for whole-home coverage; Matter for cross-platform compatibility"],
          ["Sensors", "ALS + temperature", "Ambient light sensor for auto-schedule; temp sensor for climate-aware control"]
        ]
      },
      {
        type: "heading",
        text: "Execution Plan"
      },
      {
        type: "list",
        items: [
          "Phase 1 — Prototype actuator node: ESP32-C6 dev board + motor driver breakout on breadboard, validate motor control and Zigbee pairing",
          "Phase 2 — Custom PCB design in KiCad: integrated MCU, motor driver, battery management (BQ25185), and solar input circuit on a single 2-layer board",
          "Phase 3 — Mechanical design: 3D-printed enclosure that clips onto standard 38mm roller blind tubes",
          "Phase 4 — Hub design: ESP32-S3 carrier board with Ethernet (W5500), Zigbee coordinator radio, and USB-C power",
          "Phase 5 — Firmware: Zigbee end-device stack, OTA updates, light-based scheduling, and Home Assistant integration via MQTT",
          "Phase 6 — Field test: install 4+ units in a home, validate mesh reliability, battery life, and solar charging efficiency"
        ]
      },
      {
        type: "heading",
        text: "Key Design Considerations"
      },
      {
        type: "list",
        items: [
          "Ultra-low standby power — target < 10µA sleep current for months of battery life between charges",
          "Solar MPPT — efficient energy harvesting from small (1W–2W) window-mounted solar cells",
          "Retrofit-friendly — no permanent modifications to existing blinds or windows",
          "Mesh networking — Zigbee mesh ensures coverage even in large homes with thick walls",
          "Quiet operation — gear motor selection and PWM ramp profiles to minimize noise"
        ]
      }
    ],
    images: []
  },
  {
    id: "ai-nav-rover",
    title: "AI Navigation Rover — Autonomous Robot Platform",
    category: "personal",
    image: aiRoverImg,
    summary:
      "An autonomous 4WD rover with onboard AI vision, LiDAR mapping, and a custom motor controller PCB — combining hardware and ML for real-time navigation.",
    content: [
      {
        type: "paragraph",
        text: "This project combines hardware engineering and AI/ML to build a small autonomous rover capable of navigating indoor environments using computer vision and LiDAR. The rover features a custom-designed motor controller and power distribution PCB, demonstrating end-to-end hardware-software integration."
      },
      {
        type: "paragraph",
        text: "The goal is to create a platform that can autonomously map a room, avoid obstacles, and navigate to target waypoints — all powered by onboard compute with no cloud dependency."
      },
      {
        type: "heading",
        text: "System Architecture"
      },
      {
        type: "table",
        headers: ["Subsystem", "Component", "Details"],
        rows: [
          ["Compute", "NVIDIA Jetson Orin Nano", "8GB RAM, GPU-accelerated inference for real-time vision"],
          ["Vision", "OAK-D Lite (Stereo + RGB)", "Depth perception + object detection via onboard VPU"],
          ["LiDAR", "RPLIDAR A1", "360° 2D scanning for SLAM-based mapping"],
          ["Motor Control", "Custom PCB (STM32 + DRV8833)", "Dual H-bridge driver with encoder feedback and PID loops"],
          ["Power", "Custom power distribution board", "3S LiPo (11.1V) with 5V/3.3V regulated rails, e-fuse protection"],
          ["Chassis", "4WD aluminum frame", "Differential drive with encoder-equipped DC gear motors"],
          ["Communication", "Wi-Fi + ROS 2", "Telemetry, remote monitoring dashboard, and OTA command interface"]
        ]
      },
      {
        type: "heading",
        text: "Execution Plan"
      },
      {
        type: "list",
        items: [
          "Phase 1 — Motor controller PCB: design in KiCad with STM32G4 MCU, DRV8833 dual H-bridge, and quadrature encoder inputs",
          "Phase 2 — Power distribution board: 3S LiPo input, voltage regulators (5V @ 5A for Jetson, 3.3V for peripherals), battery monitoring via INA219",
          "Phase 3 — Chassis assembly and wiring: motors, encoders, LiDAR, camera, and Jetson mounted on aluminum platform",
          "Phase 4 — Firmware: STM32 motor control with PID speed regulation, communicating with Jetson over UART/CAN",
          "Phase 5 — AI software stack: ROS 2 for sensor fusion, SLAM (using LiDAR + odometry), and path planning with Nav2",
          "Phase 6 — Object detection: deploy YOLOv8 on Jetson for real-time obstacle classification and avoidance"
        ]
      },
      {
        type: "heading",
        text: "Skills Demonstrated"
      },
      {
        type: "list",
        items: [
          "Custom PCB design — schematic capture, layout, and fabrication of motor controller and power boards",
          "Embedded firmware — real-time motor control on STM32 with PID tuning",
          "AI/ML — deploying neural networks on edge hardware (Jetson) for vision-based navigation",
          "Systems integration — coordinating mechanical, electrical, and software subsystems into a working platform",
          "Power systems — battery management, multi-rail power distribution, and protection circuits"
        ]
      }
    ],
    images: []
  },
  {
    id: "solar-mppt-charger",
    title: "Solar MPPT Charge Controller",
    category: "personal",
    image: solarMpptImg,
    summary:
      "A custom-designed Maximum Power Point Tracking (MPPT) solar charge controller PCB for off-grid LiFePO4 battery systems.",
    content: [
      {
        type: "paragraph",
        text: "This project is a ground-up design of a solar charge controller with Maximum Power Point Tracking (MPPT) — the most efficient method of harvesting energy from photovoltaic panels. Unlike simple PWM controllers, MPPT dynamically adjusts the operating voltage of the solar panel to extract maximum power under varying sunlight conditions."
      },
      {
        type: "paragraph",
        text: "The controller is designed for 12V–24V solar panel inputs and charges a 12.8V LiFePO4 battery pack, targeting off-grid and portable power applications. The entire design — power stage, control loop, and monitoring firmware — is built from scratch."
      },
      {
        type: "heading",
        text: "System Architecture"
      },
      {
        type: "table",
        headers: ["Block", "Component", "Details"],
        rows: [
          ["Power Stage", "Synchronous buck converter", "High-side + low-side MOSFETs (CSD19536) with bootstrap gate drive"],
          ["Inductor", "Coilcraft XAL7030", "22µH shielded power inductor rated for 7A saturation"],
          ["Controller", "STM32G4", "Arm Cortex-M4F with hardware ADC + comparator for analog control loop"],
          ["Current Sensing", "INA228", "High-side current/power monitor with 20-bit ADC for precise MPPT tracking"],
          ["Gate Driver", "UCC27211A", "Half-bridge driver with adaptive dead-time for synchronous rectification"],
          ["Battery Protection", "BQ76920", "3–5 cell BMS IC with overvoltage, undervoltage, and overcurrent protection"],
          ["Display", "0.96\" OLED (SSD1306)", "Real-time display of voltage, current, power, and battery SOC"],
          ["Communication", "USB-C + UART", "Data logging interface and firmware update port"]
        ]
      },
      {
        type: "heading",
        text: "Execution Plan"
      },
      {
        type: "list",
        items: [
          "Phase 1 — Power stage simulation in LTspice: verify buck converter efficiency, loop stability (bode plot), and transient response",
          "Phase 2 — Schematic capture in Altium Designer: power stage, gate drivers, current sensing, MCU, and connectors",
          "Phase 3 — 4-layer PCB layout with dedicated power and ground planes, optimized for thermal dissipation and low-noise analog sensing",
          "Phase 4 — Fabrication and assembly: order boards from JLCPCB, reflow solder power components, hand-solder fine-pitch ICs",
          "Phase 5 — Firmware: implement Perturb & Observe MPPT algorithm, battery charging profiles (CC/CV), and OLED dashboard",
          "Phase 6 — Testing: validate efficiency across load conditions, verify MPPT tracking accuracy with variable light source, thermal stress test"
        ]
      },
      {
        type: "heading",
        text: "Skills Demonstrated"
      },
      {
        type: "list",
        items: [
          "Power electronics design — high-efficiency switching converter with synchronous rectification",
          "Analog/mixed-signal design — precision current/voltage sensing and control loop compensation",
          "PCB layout for power — thermal management, minimized switching loops, and proper ground plane strategy",
          "Embedded systems — real-time MPPT algorithm and battery management firmware on STM32",
          "Simulation — LTspice modeling of power stage behavior before committing to hardware"
        ]
      }
    ],
    images: []
  }
];

export default projects;