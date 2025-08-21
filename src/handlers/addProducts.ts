import { response } from "express"

const products = [
    {
        "id": 1,
        "name": "Logitech G502 LIGHTSPEED",
        "description": "The Logitech G502 LIGHTSPEED is a high-performance wireless gaming mouse combining precision, speed, and customizability. It features a 25,600 DPI HERO sensor, 11 programmable buttons, adjustable weights, and LIGHTSPEED wireless technology for ultra-fast response. Ideal for competitive gamers who demand versatility and reliability.",
        "price": "109.00",
        "category": "mouse",
        "image": "/images/g502_lightspeed.png",
        "stock": 11
    },
    {
        "id": 2,
        "name": "HyperX Pulsefire Haste 2 Wireless",
        "description": "The HyperX Pulsefire Haste 2 Wireless is an ultra-lightweight gaming mouse designed for speed and precision. Weighing just 61 grams, it features a responsive 26,000 DPI sensor, dual wireless connectivity (2.4GHz and Bluetooth), and long battery life. With customizable buttons and smooth, low-friction skates, it offers top-tier performance for competitive gamers.",
        "price": "69.99",
        "category": "mouse",
        "image": "/images/HyperX_Pulsefire_Haste_2.png",
        "stock": 31
    },
    {
        "id": 3,
        "name": "HyperX Alloy Origins 60",
        "description": "The HyperX Alloy Origins 60 is a compact 60% mechanical gaming keyboard featuring HyperX Red linear switches for smooth and ultra-responsive keystrokes. Built with an aircraft-grade aluminum body, it’s both durable and portable, with a detachable USB-C cable and adjustable tilt angles. The keyboard uses PBT double-shot keycaps and has per-key RGB lighting, customizable through HyperX NGENUITY software. It supports full N-key rollover, stores up to 3 profiles, and is compatible with PC, PlayStation, and Xbox. Perfect for gamers who want high performance in a minimalist form.",
        "price": "109.00",
        "category": "keyboard",
        "image": "/images/HyperX_Alloy_Origins_60.png",
        "stock": 76
    },
    {
        "id": 4,
        "name": "ASUS VG289Q",
        "description": "ASUS TUF Gaming VG289Q is a 28-inch 4K UHD (3840x2160) IPS monitor designed for gamers and content creators seeking high-resolution visuals and color accuracy. It offers a 90% DCI-P3 color gamut, HDR10 support, and Adaptive-Sync technology for smooth gameplay. The ergonomic stand provides tilt, swivel, pivot, and height adjustments, ensuring comfortable viewing angles. Connectivity options include DisplayPort 1.2, two HDMI 2.0 ports, and a headphone jack. With features like Shadow Boost and GamePlus, it enhances gaming experiences by improving visibility in dark scenes and providing in-game enhancements.",
        "price": "349.00",
        "category": "monitor",
        "image": "/images/ASUS_VG289Q_28_Inches_UHD_4K.png",
        "stock": 9
    },
    {
        "id": 5,
        "name": "ASUS TUF Gaming K1 RGB",
        "description": "ASUS TUF Gaming K1 RGB keyboard is a durable and performance-focused gaming keyboard. It features silent tactile switches housed in a spill-resistant frame, customizable 5-zone RGB lighting with side-mounted light bars, and a dedicated volume knob for intuitive control. The detachable ergonomic wrist rest ensures extended comfort during long gaming sessions. With on-the-fly macro recording, 19-key rollover, and compatibility with Armoury Crate software, it's designed to meet the demands of serious gamers.",
        "price": "49.99",
        "category": "keyboard",
        "image": "/images/ASUS_TUF_Gaming_K1_RGB.png",
        "stock": 16
    },
    {
        "id": 6,
        "name": "Kit 32GB DRAM DDR4 3200 MHz VENGEANCE RGB PRO (2 x 16GB)",
        "description": "Corsair Vengeance RGB PRO 32GB (2 x 16GB) DDR4 3200MHz Kit is a high-performance memory kit designed for gamers and PC enthusiasts. It features dynamic multi-zone RGB lighting customizable via CORSAIR iCUE software, allowing synchronization with other compatible components. With a tested speed of 3200MHz and CL16 latency, it ensures fast and stable performance. The anodized aluminum heat spreader enhances thermal conductivity, maintaining optimal temperatures during intensive tasks. Compatible with Intel and AMD platforms, this kit offers both aesthetic appeal and reliable performance for demanding applications.",
        "price": "109.99",
        "category": "ram",
        "image": "/images/DRAM_DDR4_3200_MHz_VENGEANCE.png",
        "stock": 46
    },
    {
        "id": 7,
        "name": "LG UltraGear 27 Inch Full HD VA Panel LCD",
        "description": "LG UltraGear 27GQ50F is a 27-inch Full HD gaming monitor designed for smooth and immersive gameplay. It features a VA panel with a 1920 x 1080 resolution, a 165Hz refresh rate, and 1ms Motion Blur Reduction (MBR) technology. The monitor supports AMD FreeSync Premium for tear-free gaming and includes features like Dynamic Action Sync, Black Stabilizer, and a virtually borderless design. With a 3000:1 contrast ratio and 250 nits brightness, it delivers vibrant visuals. Connectivity options include two HDMI ports, one DisplayPort, and a headphone jack.",
        "price": "199.99",
        "category": "monitor",
        "image": "/images/LG_UltraGear_27_Inch_Full_HD_VA_Panel_LCD.png",
        "stock": 16
    },
    {
        "id": 8,
        "name": "CPU AMD Ryzen 7 3700x",
        "description": "The AMD Ryzen 7 3700X is an 8-core, 16-thread desktop processor based on the Zen 2 architecture. It operates at a base frequency of 3.6 GHz and can boost up to 4.4 GHz, offering robust performance for both gaming and productivity tasks. Manufactured using a 7nm process, it features a 65W TDP, 32MB of L3 cache, and supports PCIe 4.0, making it a power-efficient choice for modern PC builds.",
        "price": "329.00",
        "category": "cpu",
        "image": "/images/procesador_cpu_amd_ryzen_7_3700x.png",
        "stock": 8
    },
    {
        "id": 9,
        "name": "MSI GeForce RTX™ 4070 Ti GAMING X TRIO 12G",
        "description": "The MSI GeForce RTX™ 4070 Ti GAMING X TRIO 12G is a high-performance graphics card designed for gamers and creators. Powered by NVIDIA's Ada Lovelace architecture, it features 7680 CUDA cores and 12GB of GDDR6X memory on a 192-bit interface, delivering a memory bandwidth of 504 GB/s .",
        "price": "329.00",
        "category": "gpu",
        "image": "/images/GeForce_RTX_4070_Ti_GAMING_X_TRIO_12G.png",
        "stock": 12
    },
    {
        "id": 10,
        "name": "Intel Core i5-12400F",
        "description": "Intel Core i5-12400F is a 12th Gen desktop processor offering excellent performance for gaming and productivity. It features 6 performance cores (no efficiency cores), 12 threads, and a base clock of 2.5 GHz (up to 4.4 GHz with Turbo Boost). Built on Intel's Alder Lake architecture, it supports DDR4 and DDR5 memory, PCIe 5.0, and delivers strong single-core and multi-core performance. With a 65W TDP and no integrated graphics, it's an ideal choice for users building a system with a dedicated GPU.",
        "price": "129.00",
        "category": "cpu",
        "image": "/images/intel_cpu_i5_12400f.png",
        "stock": 59
    },
    {
        "id": 11,
        "name": "GeForce RTX 4080 SUPER 16G SUPRIM X",
        "description": "The GeForce RTX 4080 SUPER 16G SUPRIM X is a top-tier graphics card designed for ultimate 4K gaming and content creation. Powered by NVIDIA’s Ada Lovelace architecture, it features 16GB of ultra-fast GDDR6X memory, enhanced ray tracing and AI performance with DLSS 3, and a boost clock up to 2610 MHz. The premium SUPRIM X design includes a robust TRI FROZR 3S cooling system, metal backplate, dual BIOS, and Mystic Light RGB for both performance and aesthetics. Ideal for gamers and creators demanding uncompromised power and cooling efficiency.",
        "price": "729.00",
        "category": "gpu",
        "image": "/images/GeForce_RTX_4080_SUPER_16G_SUPRIM_X.png",
        "stock": 3
    },
    {
        "id": 12,
        "name": "GeForce MSI RTX 3080 GAMING TRIO 10G",
        "description": "The GeForce MSI RTX 3080 GAMING TRIO 10G delivers exceptional performance for high-end gaming and creative workloads. Featuring 10GB of GDDR6X memory and powered by the NVIDIA Ampere architecture, it supports advanced ray tracing, DLSS, and high frame rates at 4K resolution. The TRI FROZR 2 thermal system ensures efficient cooling with TORX Fan 4.0 technology, a robust heatsink, and a strong metal backplate. With customizable RGB lighting and reinforced build quality, this GPU is built for gamers seeking powerful and reliable performance.",
        "price": "559.99",
        "category": "gpu",
        "image": "/images/GeForce_RTX_3080_GAMING_TRIO_10G.png",
        "stock": 6
    },
    {
        "id": 13,
        "name": "HP 7 Pro Series 31.5 Inch Thunderbolt 4 Monitor",
        "description": "The HP 7 Pro Series 31.5 Inch Thunderbolt 4 Monitor is a premium display designed for professionals who demand high performance and connectivity. It features a 31.5-inch screen with sharp resolution and vibrant color accuracy, ideal for creative work, multitasking, and business applications. With Thunderbolt 4 support, it delivers ultra-fast data transfer, daisy-chaining, and up to 100W power delivery to laptops. The sleek, ergonomic design includes adjustable height, tilt, swivel, and pivot, while integrated ports provide versatile connectivity. Perfect for maximizing productivity in modern workspaces.",
        "price": "319.99",
        "category": "monitor",
        "image": "/images/HP_7_Pro_Series_31_Thunderbolt_4_Monitor.png",
        "stock": 2
    }
]

for (let i = 0; i < products.length; i++) {
    fetch('http://localhost:3001/api/products',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(products[i]),
        }).then((response) => response.json)
        .then(data => console.log('Added', data))
        .catch(error => { console.log("Error:", error) })
}