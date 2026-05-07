import firstTouchImg from "../media/first_touch_img.webp";
import lattepandaImg from "../media/lattepanda_carrier.png";
import smartBlindsImg from "../media/smart_blinds.png";
import dustChamberImg from "../media/dust_chamber.png";
import secureUsbImg from "../media/secure_usb_module.png";
import contextualAwarenessImg from "../media/contextual_awareness.png";

const projects = [
  {
    id: "secure-usb-module",
    title: "Secure USB Option Module",
    category: "work",
    company: "Dell Technologies",
    image: secureUsbImg,
    imageDisclaimer: "Note: Due to confidentiality, actual images from work cannot be shared. This AI-generated image is a close approximation of the module we designed.",
    summary:
      "A hardware + firmware firewall enabling USB port control and management for enterprise Dell systems.",
    content: [
      {
        type: "paragraph",
        text: "The Secure USB Option Module is a hardware/software solution designed to monitor USB packets at the hardware level and prevent HID attacks. It also enables enterprise IT administrators to have granular control over USB device interactions at the system level."
      },
      {
        type: "heading",
        text: "Key Contributions"
      },
      {
        type: "list",
        items: [
          {
            text: "System Architecture",
            subItems: [
              "block diagrams",
              "placement study"
            ]
          },
          "Part selection and vendor communication",
          {
            text: "Schematic capture and PCB layout using Cadence OrCAD and Allegro",
            subItems: [
              "6 layer board",
              "high speed usb 2.0",
              "45mm * 32mm board size"
            ]
          }
        ]
      },
      {
        type: "paragraph",
        text: "This work resulted in two U.S. patent applications (<a href=\"https://patents.google.com/patent/US20250335642A1\" target=\"_blank\" rel=\"noreferrer\">US 20250335642 A1</a> and <a href=\"https://patents.google.com/patent/US20250390614A1\" target=\"_blank\" rel=\"noreferrer\">US 20250390614 A1</a>), both currently pending."
      }
    ],
    images: []
  },
  {
    id: "contextual-awareness-svt",
    title: "Low Power AI-enabled Contextual Awareness",
    category: "work",
    company: "Dell Technologies",
    image: contextualAwarenessImg,
    imageDisclaimer: "Note: Due to confidentiality, actual images from work cannot be shared. This AI-generated image is a close approximation of the system we validated.",
    summary:
      "Enable low power contextual awareness using multiple sensors (capacitive proximity, UWB Radar, charge domain image sensor etc. ), AI/ML algorithms, and enable new usecases",
    content: [
      {
        type: "paragraph",
        text: "This Project aims to develop low-power, always-on contextual awareness capabilities for Dell systems through the integration of multiple sensing modalities and intelligent processing."
      },
      {
        type: "heading",
        text: "Use Cases We Validated"
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
    id: "dust-chamber",
    title: "Accelerated lifetime Dust Chamber",
    category: "work",
    company: "Dell Technologies",
    image: dustChamberImg,
    imageDisclaimer: "Note: Due to confidentiality, actual images from work cannot be shared. This AI-generated image is a close approximation of the dust chamber we built.",
    summary:
      "A custom-built dust test chamber with ESP32-controlled fan agitation and automated stress benchmarking to simulate accelerated real-world dust exposure for Dell systems deployed in India.",
    content: [
      {
        type: "paragraph",
        text: "Dell was experiencing costly product recalls in the Indian market due to dust-related hardware failures. Systems used in high-dust and high ambient temperature environments — offices during the day, homes in the evening — were accumulating particulate matter that caused thermal throttling, fan failures, and connector degradation far faster than standard test models predicted."
      },
      {
        type: "paragraph",
        text: "To address this, we designed and built a custom accelerated dust ingress test chamber in-house. The sealed acrylic enclosure fits laptops and small desktops, with two 40W fans mounted internally to circulate and suspend fine particulate. An ESP32 microcontroller manages fan speed, duty cycles, and timing profiles, communicating with the host PC over USB serial. Python and PowerShell scripts on the host orchestrate stress benchmarks on the DUT while coordinating dust exposure cycles. The test profile simulates 1 year of accelerated lifetime use in a high-dust, high-ambient-temperature environment — condensed into a single day of testing."
      },
      {
        type: "heading",
        text: "Key Contributions"
      },
      {
        type: "list",
        items: [
          "Designed the electrical system — ESP32 firmware for fan PWM control, USB serial protocol, and safety interlocks",
          "Developed the host-side Python automation software that synchronizes stress benchmarks (CPU, GPU, disk) with dust agitation cycles",
          "Created configurable test profiles to replicate different real-world usage scenarios and dust densities",
          "Collaborated with mechanical engineers on chamber design, airflow simulation, and dust media selection",
          "Results directly informed design changes that reduced dust-related field failures and recall costs"
        ]
      },
      {
        type: "heading",
        text: "Impact"
      },
      {
        type: "paragraph",
        text: "The chamber enabled the team to reproduce field failures in-lab for the first time, identify vulnerable components, and validate mitigation strategies — all before committing to production changes. This significantly reduced the cost of recalls and improved product reliability for the Indian market."
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
];

export default projects;