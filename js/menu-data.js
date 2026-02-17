// Menu Data for Palem Merah
const menuData = {
    merchant_info: {
        name: "Palem Merah",
        address: "Jl. Raya Dramaga No.43 Km.7 Bogor 16680",
        contacts: [
            { name: "Irfan", phone: "087877558863" },
            { name: "Romi", phone: "087872001632" }
        ],
        notes: [
            "Jenis kue dapat diubah sesuai selera",
            "Harga dalam Rupiah (IDR)"
        ]
    },
    menus: {
        kue_manis_traditional: {
            title: "Kue Manis Tradisional",
            items: [
                { item: "Kue Lumpur", price: 3000 },
                { item: "Nona Manis", price: 3500 },
                { item: "Kelepon", price: 4000 },
                { item: "Wingko Babat", price: 4000 },
                { item: "Bugis Mandi/Cente Manis", price: 6000 },
                { item: "Bugis Daun", price: 3000 },
                { item: "Bugis Telunjuk", price: 3500 },
                { item: "Talam Ubi Kuning", price: 3500 },
                { item: "Talam Ubi Special", price: 7000 },
                { item: "Talam Jagung", price: 3500 },
                { item: "Ongol - Ongol", price: 3500 },
                { item: "Nagasari", price: 3000 },
                { item: "Dadar Gulung", price: 3000 },
                { item: "Pepe Pelangi", price: 3500 },
                { item: "Pepe Gulung", price: 6000 },
                { item: "Pepe Panggang", price: 6000 },
                { item: "Pepe Cokelat", price: 3500 },
                { item: "Onde - Onde", price: 3500 },
                { item: "Serabi Solo", price: 3500 },
                { item: "Putu Mayang", price: 7000 },
                { item: "Bika Ambon Potong/Cetak", price: 5500 },
                { item: "Putri Noong", price: 4000 },
                { item: "Singkong Thailand", price: 5000 },
                { item: "Bubur Singkong", price: 5000 },
                { item: "Ancemon", price: 5000 },
                { item: "Getuk", price: 3500 },
                { item: "Putu Belanda", price: 4000 },
                { item: "Ubi Cilembu Vla Santan", price: 6000 },
                { item: "Pisang Molen Coklat Keju", price: 6000 },
                { item: "Jagung Serut Kelapa/Keju", price: 6000 },
                { item: "Bubur Kacang Ijo", price: 8000 },
                { item: "Bubur Ketan Hitam", price: 8000 },
                { item: "Bubur Biji Salak", price: 8000 },
                { item: "Bubur Sum Sum", price: 8000 }
            ]
        },
        kue_manis: {
            title: "Kue Manis",
            items: [
                { item: "Soes Eclair", price: 4000 },
                { item: "Soes Buah", price: 5000 },
                { item: "Soes Polos", price: 3000 },
                { item: "Pancake Coklat Keju", price: 5000 },
                { item: "Pancake Cokelat/Kacang", price: 4500 },
                { item: "Pai Buah Oval", price: 5000 },
                { item: "Pai Buah Jumbo", price: 6500 },
                { item: "Lapis Surabaya", price: 5000 },
                { item: "Rollcake Blueberry", price: 5000 },
                { item: "Rollcake Pandan", price: 5000 },
                { item: "Brownies Kukus Blueberry", price: 4000 },
                { item: "Brownies Potong", price: 4000 },
                { item: "Muffin Tape", price: 4000 },
                { item: "Muffin Pisang", price: 4000 },
                { item: "Bolu Kukus", price: 3500 },
                { item: "Pudding Caramel", price: 6500 },
                { item: "Pudding Cokelat", price: 6000 },
                { item: "Aneka Pudding", price: 5000 },
                { item: "Pisang Goreng", price: 4500 },
                { item: "Aneka Roti Manis", price: 5000 },
                { item: "Lemon Cheesecake", price: 6000 }
            ]
        },
        kue_asin: {
            title: "Kue Asin",
            items: [
                { item: "Lemper Ayam", price: 5000 },
                { item: "Lemper Bakar", price: 4000 },
                { item: "Arem - Arem Ayam", price: 5000 },
                { item: "Arem - Arem Oncom", price: 3500 },
                { item: "Lumpia", price: 5500 },
                { item: "Sosis Solo", price: 5000 },
                { item: "Martabak Telor Mini", price: 5000 },
                { item: "Panada", price: 4000 },
                { item: "Pastel Telor", price: 3500 },
                { item: "Pastel Spesial", price: 6000 },
                { item: "Ketan Urap", price: 3500 },
                { item: "Pisang Keju", price: 5000 },
                { item: "Risoles Mayonnaise", price: 6500 },
                { item: "Risoles Bolognaise", price: 8000 },
                { item: "Risoles Roghut Ayam", price: 5000 },
                { item: "Risoles Ayam Teriyaki", price: 6000 },
                { item: "Kroket Kentang", price: 7000 },
                { item: "Pizza Mini", price: 4000 },
                { item: "Roti Goreng Ayam", price: 4000 },
                { item: "Pai Ayam Oval", price: 6000 },
                { item: "Pai Ayam Jumbo", price: 8000 },
                { item: "Macaroni Schotel", price: 8000 },
                { item: "Lasagna", price: 17500 },
                { item: "Siomay Goreng (2pcs)", price: 6000 },
                { item: "Kebab Mini", price: 5000 }
            ]
        },
        umbi: {
            title: "Umbi-umbian",
            base_price: 5000,
            items: [
                { item: "Ubi Cilembu", price: 5000 },
                { item: "Jagung Kukus", price: 5000 },
                { item: "Pisang Kukus", price: 5000 },
                { item: "Kacang Tanah Rebus", price: 5000 },
                { item: "Kacang Bogor Rebus", price: 5000 },
                { item: "Kacang Edamame", price: 5000 },
                { item: "Talas Kukus", price: 5000 }
            ]
        },
        nasi_box: {
            title: "Paket Nasi Box",
            items: [
                {
                    item: "Paket A",
                    price: 35000,
                    description: "Nasi Putih, Ayam Fillet/Rollade, Capcay, Oseng Tahu Cabe Hijau, Sambal, Kerupuk + Air",
                    box_size: "18x18"
                },
                {
                    item: "Paket B",
                    price: 40000,
                    description: "Nasi Putih, Ayam Goreng/Bakar, Cah Kimlo/Brokoli, Sambel Goreng Kentang, Sambel + Kerupuk, Buah + Air",
                    box_size: "20x20"
                },
                {
                    item: "Paket C",
                    price: 45000,
                    description: "Nasi Putih, Empal/Rendang, Cah Jamur, Pepes Tahu/Perkedel, Sambel + Kerupuk, Buah + Air",
                    box_size: "20x20"
                },
                {
                    item: "Paket Gudeg Komplit",
                    price: 50000,
                    description: "Nasi Putih, Opor Ayam, Telor Pindang, Gudeg Krecek, Tempe Tahu Bacem, Sambal + Kerupuk, Buah + Air"
                },
                {
                    item: "Paket Timbel",
                    price: 50000,
                    description: "Nasi Timbel, Empal, Ikan Gabus Cabe Hijau, Urab/Sayur Asem, Tahu Tempe Goreng, Sambal + Peyek, Buah + Air"
                },
                {
                    item: "Paket Liwet Komplit",
                    price: 50000,
                    description: "Nasi Liwet, Ayam Bakar/Goreng, Kapasan Balado, Tumis Daun Pepaya, Bakwan Jagung, Sambal + Gendar, Buah + Air"
                },
                {
                    item: "Paket Nasi Box Special 1",
                    price: 55000,
                    description: "Nasi Putih, Ayam Fillet BBQ, Udang Tempura, Cap Cay, Perkedel Kentang, Sambal + Kerupuk, Buah + Pudding + Air",
                    box_size: "20x27"
                },
                {
                    item: "Paket Nasi Box Special 2",
                    price: 75000,
                    description: "Nasi Putih, Daging Kotak Balado, Udang Goreng Mentega, Cah Jagung Semi, Soun Goreng, Sambal + Kerupuk, Buah + Pudding + Air",
                    box_size: "20x27"
                }
            ]
        },
        prasmanan: {
            title: "Paket Prasmanan",
            items: [
                {
                    item: "Prasmanan Special",
                    price: 60000,
                    description: "Nasi Putih, Sop Kimlo, Ayam Fillet Saos Padang, Tahu Schotel, Udang Tempura, Sambal + Kerupuk, Buah/Pudding, Air"
                },
                {
                    item: "Prasmanan Tradisional",
                    price: 60000,
                    description: "Nasi Putih/Timbel, Empal/Ayam Goreng, Gabus C.H/Teri Balado, Oseng D.Pepaya/Urap, Tahu Tempe Gr/Bakwan, Sayur Asem, Sambal Lalap, Peyek/Kerupuk, Buah + Air"
                },
                {
                    item: "Prasmanan Istimewa",
                    price: 80000,
                    description: "Nasi Putih, Tekwan/Sop Bakso, Daging Lada Hitam, Ayam Rica - Rica, Soun Goreng Special, Cah Brokoli, Sambal + Kerupuk, Buah, Pudding, Air"
                }
            ]
        },
        coffee_break: {
            title: "Coffee Break",
            items: [
                {
                    item: "Coffee Break Paket A",
                    price: 25000,
                    description: "Kopi + Teh + Creamer, Lemon Cheesecake, Lemper, Keripik/Kacang"
                },
                {
                    item: "Coffee Break Paket B",
                    price: 30000,
                    description: "Kopi + Teh + Creamer, Lapis Pepe Gulung, Risol Bolognese, Cake Tape, Keripik/Kacang"
                },
                {
                    item: "Coffee Break Tradisional",
                    price: 27500,
                    description: "Bandrek + Teh/Kopi, Kacang Rebus, Pisang Kukus/Goreng, Ubi Cilembu/Jagung Rebus"
                }
            ]
        },
        snack_box: {
            title: "Paket Snack Box",
            items: [
                {
                    item: "Snack Box 10K",
                    price: 10000,
                    description: "Lumpur Pandan, Pastel, Keripik/Kacang, Air"
                },
                {
                    item: "Snack Box 12.5K",
                    price: 12500,
                    description: "Panada, Onde - Onde, Nagasari, Air"
                },
                {
                    item: "Snack Box 15K",
                    price: 15000,
                    description: "Arem Ayam, Martabak, Talam Jagung, Air"
                },
                {
                    item: "Snack Box 17.5K",
                    price: 17500,
                    description: "Risol Mayo, Pai Buah, Klepon, Air"
                },
                {
                    item: "Snack Box 20K",
                    price: 20000,
                    description: "Sosis Solo, Lemper, Pancake Coklat, Bolu Kukus, Air"
                },
                {
                    item: "Snack Box 25K",
                    price: 25000,
                    description: "Pastel Spesial, Pepe Panggang, Bika Ambon, Keripik/Kacang, Teh kotak"
                }
            ]
        }
    }
};
