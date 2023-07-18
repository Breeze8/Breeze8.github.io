window.onload = function () {
        var nodes = [
            {
                id: "1",
                tags: ["lvl-1"],
                name: "ID 646797",
                title: "ВЫ ",
                status: 'Структурный менеджер',
                invest: '$569 000',
                level: 1
            },
            {
                id: "2",
                pid: "1",
                tags: ["lvl-1"],
                name: "ID 44",
                title: "Аккурбанбаджанов В.О.",
                email: "ava@domain.com",
                level: 2
            },
            {id: "3", tags: ["lvl-1"], pid: "1", name: "ID 561236", title: "Василенкович ю. Э.", level: 2},
            {
                id: "4",
                pid: "1",
                tags: ["lvl-1"],
                name: "ID 561236",
                title: "Василенкович ю. Э.",
                email: "jay@domain.com",
                level: 2
            },
            {id: "5", tags: ["lvl-1 inactive-node"], pid: "1", name: "ID 561236 22", title: "Василенкович ю. Э.", level: 2},
            {
                id: "6",
                tags: ["lvl-1", "disabled-node"],
                pid: "1",
                name: "ID 561236 657",
                title: "Василенкович ю. Э.",
                level: 2
            },
            {id: "7", tags: ["inactive-node"], pid: "2", name: "ID 561236 1", title: "Василенкович ю. Э.", level: 3},
            {id: "8", tags: ["inactive-node"], pid: "2", name: "ID 561236 2", title: "Василенкович ю. Э.", email: "kohen@domain.com", level: 3},
            {id: "9", pid: "3", name: "ID 561236 3", title: "Аккурбанбаджанов В.О.", level: 3},
            {id: "10", pid: "3", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 3},
            {id: "11", pid: "4", name: "ID 561236 7", title: "Василенкович ю. Э.", level: 3},
            {id: "12", pid: "4", name: "ID 561236 8", title: "Василенкович ю. Э.", level: 3},
            {id: "13", tags: ["inactive-node"], pid: "5", name: "ID 561236 ", title: "Василенкович ю. Э.", level: 3},
            {id: "14", tags: ["inactive-node"], pid: "5", name: "ID 561236", title: "Василенкович ю. Э.", level: 3},
            {id: "15", tags: ["disabled-node"], pid: "6", name: "ID 561236", title: "Василенкович ю. Э.", level: 3},
            {id: "16", tags: ["disabled-node"], pid: "6", name: "ID 561236", title: "Василенкович ю. Э.", level: 3},
            {id: "17", pid: "7", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "18", pid: "7", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "19", pid: "8", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "20", pid: "8", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "21", pid: "9", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "22", pid: "9", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "23", pid: "10", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "24", pid: "10", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "25", pid: "11", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "26", pid: "11", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "27", pid: "12", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "28", pid: "12", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "29", pid: "13", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "30", pid: "13", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "31", pid: "14", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "32", pid: "14", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "33", tags: ["disabled-node"], pid: "15", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "34", tags: ["disabled-node"], pid: "15", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "35", tags: ["disabled-node"], pid: "16", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "36", tags: ["disabled-node"], pid: "16", name: "ID 561236", title: "Василенкович ю. Э.", level: 4},
            {id: "37", pid: "17", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "38", pid: "17", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "39", pid: "18", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "40", pid: "18", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "41", pid: "19", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "42", pid: "19", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "43", pid: "20", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "44", pid: "20", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "45", pid: "21", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "46", pid: "21", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "47", pid: "22", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "48", pid: "22", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "49", pid: "23", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "50", pid: "23", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "51", pid: "24", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "52", pid: "24", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "53", pid: "25", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "54", pid: "25", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "55", pid: "26", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "56", pid: "26", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "57", pid: "27", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "58", pid: "27", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "59", pid: "28", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "60", pid: "28", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "61", pid: "29", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "62", pid: "29", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "63", pid: "30", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "64", pid: "30", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "65", pid: "31", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "66", pid: "31", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "67", pid: "32", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "68", pid: "32", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "69", tags: ["disabled-node"], pid: "33", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "70", tags: ["disabled-node"], pid: "33", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "71", tags: ["disabled-node"], pid: "34", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "72", tags: ["disabled-node"], pid: "34", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "73", tags: ["disabled-node"], pid: "35", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "74", tags: ["disabled-node"], pid: "35", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "75", tags: ["disabled-node"], pid: "36", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "76", tags: ["disabled-node"], pid: "36", name: "ID 561236", title: "Василенкович ю. Э.", level: 5},
            {id: "77", pid: "37", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "78", pid: "37", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "79", pid: "38", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "80", pid: "38", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "81", pid: "39", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "82", pid: "39", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "83", pid: "40", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "84", pid: "40", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "85", pid: "41", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "86", pid: "41", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "87", pid: "42", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "88", pid: "42", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "89", pid: "43", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "90", pid: "43", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "91", pid: "44", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "92", pid: "44", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "93", pid: "45", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "94", pid: "45", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "95", pid: "46", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "96", pid: "46", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "97", pid: "47", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "98", pid: "47", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "99", pid: "48", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "100", pid: "48", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "101", pid: "49", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "102", pid: "49", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "103", pid: "50", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "104", pid: "50", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "105", pid: "51", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "106", pid: "51", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "107", pid: "52", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "109", pid: "52", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "110", pid: "53", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "111", pid: "53", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "112", pid: "54", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "113", pid: "54", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "114", pid: "55", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "115", pid: "55", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "116", pid: "56", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "117", pid: "56", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "118", pid: "57", name: "ID 561236", title: "Василенкович ю. Э.", level: 6},
            {id: "119", pid: "57", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "120", pid: "58", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "121", pid: "58", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "122", pid: "59", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "123", pid: "59", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "124", pid: "60", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "125", pid: "60", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "126", pid: "61", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "127", pid: "61", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "128", pid: "62", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "129", pid: "62", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "130", pid: "63", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "131", pid: "63", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "132", pid: "64", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "133", pid: "64", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "134", pid: "65", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "135", pid: "65", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "136", pid: "66", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "137", pid: "66", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "138", pid: "67", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "139", pid: "67", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "140", pid: "68", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "141", pid: "68", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "142", pid: "69", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "143", pid: "69", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "144", pid: "70", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "145", pid: "70", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "146", pid: "71", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "147", pid: "71", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "148", pid: "72", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "149", pid: "72", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "150", pid: "73", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "151", pid: "73", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "152", pid: "74", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "153", pid: "74", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "154", pid: "75", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "155", pid: "75", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "156", pid: "76", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "157", pid: "76", tags: ["disabled-node"], name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "158", pid: "77", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "159", pid: "77", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 6},
            {id: "160", pid: "78", name: "ID 561236 4", title: "Василенкович ю. Э.", level: 7},
            {id: "161", pid: "78", name: "ID 561236 231", title: "Василенкович ю. Э.", level: 7},
            {id: "164", pid: "79", name: "ID 561236 3425", title: "Василенкович ю. Э.", level: 7},
            {id: "165", pid: "79", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "166", pid: "80", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "167", pid: "80", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "168", pid: "81", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "169", pid: "81", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "170", pid: "82", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "171", pid: "82", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "172", pid: "83", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "173", pid: "83", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "174", pid: "84", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "175", pid: "84", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "176", pid: "85", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "177", pid: "85", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "178", pid: "86", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "179", pid: "86", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "180", pid: "87", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "181", pid: "87", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "182", pid: "88", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "183", pid: "88", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "184", pid: "89", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "185", pid: "89", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "186", pid: "90", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "187", pid: "90", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "188", pid: "91", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "189", pid: "91", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "190", pid: "92", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "191", pid: "92", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "192", pid: "93", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "193", pid: "93", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "194", pid: "94", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "195", pid: "94", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "196", pid: "95", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "197", pid: "95", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "198", pid: "96", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "199", pid: "96", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "200", pid: "97", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "201", pid: "97", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "202", pid: "98", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "203", pid: "98", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "204", pid: "99", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "205", pid: "99", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "206", pid: "100", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "207", pid: "100", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "208", pid: "101", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "209", pid: "101", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "210", pid: "102", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "211", pid: "102", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "212", pid: "103", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "213", pid: "103", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "214", pid: "104", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "215", pid: "104", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "216", pid: "105", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "217", pid: "105", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "218", pid: "106", name: "ID 561236 544", title: "Василенкович ю. Э.", level: 7},
            {id: "219", pid: "106", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "220", pid: "107", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "221", pid: "107", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "222", pid: "108", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "223", pid: "108", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "224", pid: "109", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "225", pid: "109", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "226", pid: "110", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "227", pid: "110", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "228", pid: "111", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "229", pid: "111", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "230", pid: "112", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "231", pid: "112", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "232", pid: "113", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "233", pid: "113", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "234", pid: "114", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "235", pid: "114", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "236", pid: "115", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "237", pid: "115", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "238", pid: "116", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "239", pid: "116", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "240", pid: "117", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "241", pid: "117", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "242", pid: "118", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "243", pid: "118", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "244", pid: "119", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "245", pid: "119", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "246", pid: "120", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "247", pid: "120", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "248", pid: "121", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "249", pid: "121", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "250", pid: "122", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "251", pid: "122", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "252", pid: "123", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "253", pid: "123", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "254", pid: "124", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "255", pid: "124", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "256", pid: "125", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "257", pid: "125", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "258", pid: "126", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "260", pid: "126", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "261", pid: "127", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "262", pid: "127", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "263", pid: "128", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "264", pid: "128", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "265", pid: "129", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "266", pid: "129", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "267", pid: "130", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "268", pid: "130", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "269", pid: "131", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "270", pid: "131", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "271", pid: "132", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "272", pid: "132", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "273", pid: "133", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "274", pid: "133", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "275", pid: "134", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "276", pid: "134", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "277", pid: "135", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "278", pid: "135", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "279", pid: "136", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "280", pid: "136", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "281", pid: "137", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "282", pid: "137", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "283", pid: "138", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "284", pid: "138", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "285", pid: "139", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "286", pid: "139", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "287", pid: "140", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "288", pid: "140", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "289", pid: "141", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "290", pid: "141", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "291", pid: "142", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "292", pid: "142", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "293", pid: "143", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "294", pid: "143", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "295", pid: "144", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "296", pid: "144", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "297", pid: "145", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "298", pid: "145", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "299", pid: "146", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "300", pid: "146", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "301", pid: "147", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "302", pid: "147", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "303", pid: "148", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "304", pid: "148", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "305", pid: "149", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "306", pid: "149", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "307", pid: "150", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "308", pid: "150", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "309", pid: "151", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "310", pid: "151", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "311", pid: "152", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "312", pid: "152", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "313", pid: "153", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "314", pid: "153", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "316", pid: "154", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "317", pid: "154", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "318", pid: "155", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "319", pid: "155", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "320", pid: "156", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "321", pid: "156", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "322", pid: "157", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "323", pid: "157", tags: ["disabled-node"], name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 7},
            {id: "324", pid: "158", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "325", pid: "158", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "326", pid: "159", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "327", pid: "159", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "328", pid: "160", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "329", pid: "161", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "330", pid: "161", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "331", pid: "162", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "332", pid: "162", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "333", pid: "163", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "334", pid: "163", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "335", pid: "164", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "336", pid: "164", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "337", pid: "165", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "338", pid: "165", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "339", pid: "166", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "340", pid: "166", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "341", pid: "167", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "342", pid: "167", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "343", pid: "168", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "344", pid: "168", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "345", pid: "169", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "346", pid: "169", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "347", pid: "170", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "348", pid: "170", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "349", pid: "171", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
            {id: "350", pid: "171", name: "ID 561236 4324", title: "Василенкович ю. Э.", level: 8},
        ];

       

        function childCount(id) {
            var count = 0;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].pid == id) {
                    count++;
                    count += childCount(nodes[i].id);
                }
            }

            return count;
        }

        OrgChart.templates.ula.field_0 = '<text text-overflow="multiline" text-anchor="start" width="175" class="field_0" style="font-size: 14px;" fill="#909090" x="15" y="40">{val}</text>';
        OrgChart.templates.ula.field_1 = '<text text-overflow="multiline" text-anchor="start" width="195" class="field_1" style="font-size: 18px;" fill="#222" x="15" y="70">{val}</text>';
        OrgChart.templates.ula.plus = '<g style="cursor:pointer;"><rect ry="0" rx="0" fill="#C4C4C4" x="-5" y="-5" width="40" height="40" stroke="#c8c8c8" stroke-width="1"></rect><line x1="4" y1="15" x2="26" y2="15" stroke-width="3" stroke="#fff"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="3" stroke="#fff"></line></g>'
        OrgChart.templates.ula.minus = '<g style="cursor:pointer;" class="level-btn"><rect ry="0" rx="0" fill="#C4C4C4" x="-5" y="-5" width="40" height="40" stroke="#c8c8c8" stroke-width="1"></rect><line x1="4" y1="15" x2="26" y2="15" stroke-width="3" stroke="#fff"></line><text style="font-size: 20px;" fill="#222" x="50" y="40"><tspan class="to-replace-js"></tspan></text></g>';
        OrgChart.templates.ula.rippleRadius = 1000;

        function getLevelByID(id, data) {
            return data.filter(
                function (data) {
                    return data.id == id
                }
            );
        }

        function lines() {
            $('.level-btn').each(function (i, elem) {
                var node = $(elem).parent().attr('control-expcoll-id');

                if (node !== '' && node !== undefined) {
                    var level = getLevelByID(node, nodes)[0].level;

                    if (level !== '' && level !== undefined) {
                        $(elem).find('.to-replace-js').text(level.toString() + ' уровень');
                    } else {
                        $(elem).find('.to-replace-js').text('');
                    }
                }
            })
        }

        var chart = new OrgChart(document.getElementById("tree"), {
            nodeMouseClickBehaviour: BALKANGraph.action.none,
            anim: {
                func: BALKANGraph.anim.outBack,
                duration: 1
            },
            // showXScroll: BALKANGraph.scroll.visible,
            mouseScroolBehaviour: BALKANGraph.action.xScroll,
            template: "ula",
            collapse: {
                level: 2,
                allChildren: true
            },
            scaleInitial: .5,
            nodeBinding: {
                field_0: "name",
                field_1: "title",
            },
            nodes: nodes,
            enableDragDrop: false,
            searchFields: ["name", "title"],
            showYScroll: BALKANGraph.none,
            showXScroll: BALKANGraph.none,
            levelSeparation: 70,
            siblingSeparation: 70,
            subtreeSeparation: 70,
            onRedraw: function (sender) {
                lines();
            },
        });

        lines();

        function getTooltipByID(id, data) {
            return data.filter(
                function (data) {
                    return data.id == id
                }
            );
        }
         var modalDataForNodes = [
            {id: "1", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000"},
            {id: "2", titleFio: 'Ф.И.О.', fioDesc: 'Хабиб Абдулманапович Нурмагомедов', titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titlePhone: 'Телефон', phoneDesc: '+7 806 669 32 89', titleEmail: 'Email', emailDesc: 'khabib05@gmail.com', titleInvest: "Инвестиции", investDesc: "$569 000", titleStructure: "Структура", structureMoney: "+ $20 569 000", structurePeople: "+ 33 человека"},
            {id: "3", titleFio: 'Ф.И.О.', fioDesc: 'Хабиб Абдулманапович Нурмагомедов', titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titlePhone: 'Телефон', phoneDesc: '+7 806 669 32 89', titleEmail: 'Email', emailDesc: 'khabib05@gmail.com', titleInvest: "Инвестиции", investDesc: "$569 000", titleStructure: "Структура", structureMoney: "+ $20 569 000", structurePeople: "+ 33 человека"},
            {id: "4", titleFio: 'Ф.И.О.', fioDesc: 'Хабиб Абдулманапович Нурмагомедов', titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titlePhone: 'Телефон', phoneDesc: '+7 806 669 32 89', titleEmail: 'Email', emailDesc: 'khabib05@gmail.com', titleInvest: "Инвестиции", investDesc: "$569 000", titleStructure: "Структура", structureMoney: "+ $20 569 000", structurePeople: "+ 33 человека"},
            {id: "5", titleFio: 'Ф.И.О.', fioDesc: 'Хабиб Абдулманапович Нурмагомедов', titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titlePhone: 'Телефон', phoneDesc: '+7 806 669 32 89', titleEmail: 'Email', emailDesc: 'khabib05@gmail.com', titleInvest: "Инвестиции", investDesc: "$569 000", titleStructure: "Структура", structureMoney: "+ $20 569 000", structurePeople: "+ 33 человека"},
            {id: "7", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "8", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "9", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "10", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "11", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "12", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "13", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "14", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "15", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "16", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "17", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "18", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "19", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "20", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "21", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "22", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "23", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "24", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "25", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "26", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "27", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "28", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "29", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "30", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "31", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "32", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "33", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "34", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "35", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "36", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "37", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "38", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "39", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
            {id: "40", titleStatus: 'Статус-уровень',  statusDesc: 'Структурный менеджер', titleInvest: "Инвестиции", investDesc: "$569 000",},
        ]

    function getOffset(element)
    {
        var bound = element.getBoundingClientRect();
        var html = document.documentElement;

        return {
            top: bound.top + window.pageYOffset - html.clientTop,
            left: bound.left + window.pageXOffset - html.clientLeft
        };
    }

        $(document).on('mouseenter', 'g[node-id]', function () {

            var node = $(this),
                id = node.attr('node-id');

            if (id !== '' && id !== undefined && !node.hasClass('disabled-node')) {
                var tooltipData = getTooltipByID(id, modalDataForNodes);

                if (tooltipData.length > 0) {
                    var childPos = getOffset(node[0]);
                    var parentPos = $('#tree').offset();
                    var childOffset = {
                        top: childPos.top - parentPos.top,
                        left: childPos.left - parentPos.left
                    }

                    var height = node[0].getBoundingClientRect().height;

                    var nodeHtml = '<div class="tooltip-js-wrapp"><div class="tooltip-js">';
                    if (tooltipData[0].titleFio !== '' && tooltipData[0].titleFio !== undefined) {
                        nodeHtml += '<p class="status">' + tooltipData[0].titleFio + '</p>';
                    }
                    if (tooltipData[0].fioDesc !== '' && tooltipData[0].fioDesc !== undefined) {
                        nodeHtml += '<div class="tooltip-row"><p class="tooltip-content">' + tooltipData[0].fioDesc + '</p></div>';
                    }
                    if (tooltipData[0].titleStatus !== '' && tooltipData[0].titleStatus !== undefined) {
                        nodeHtml += '<p class="status">' + tooltipData[0].titleStatus + '</p>';
                    }
                    if (tooltipData[0].statusDesc !== '' && tooltipData[0].statusDesc !== undefined) {
                        nodeHtml += '<div class="tooltip-row"><p class="tooltip-content">' + tooltipData[0].statusDesc + '</p></div>';
                    }
                    if (tooltipData[0].titlePhone !== '' && tooltipData[0].titlePhone !== undefined) {
                        nodeHtml += '<p class="status">' + tooltipData[0].titlePhone + '</p>';
                    }
                    if (tooltipData[0].phoneDesc !== '' && tooltipData[0].phoneDesc !== undefined) {
                        nodeHtml += '<div class="tooltip-row"><p class="tooltip-content">' + tooltipData[0].phoneDesc + '</p></div>';
                    }
                    if (tooltipData[0].titleEmail !== '' && tooltipData[0].titleEmail !== undefined) {
                        nodeHtml += '<p class="status">' + tooltipData[0].titleEmail + '</p>';
                    }
                    if (tooltipData[0].emailDesc !== '' && tooltipData[0].emailDesc !== undefined) {
                        nodeHtml += '<div class="tooltip-row"><p class="tooltip-content">' + tooltipData[0].emailDesc + '</p></div>';
                    }
                    if (tooltipData[0].titleInvest !== '' && tooltipData[0].titleInvest !== undefined) {
                        nodeHtml += '<p class="status">' + tooltipData[0].titleInvest + '</p>';
                    }
                    if (tooltipData[0].investDesc !== '' && tooltipData[0].investDesc !== undefined) {
                        nodeHtml += '<div class="tooltip-row"><p class="tooltip-content green">' + tooltipData[0].investDesc + '</p></div>';
                    }
                    if (tooltipData[0].titleStructure !== '' && tooltipData[0].titleStructure !== undefined) {
                        nodeHtml += '<p class="status">' + tooltipData[0].titleStructure + '</p>';
                    }
                    if (tooltipData[0].structureMoney !== '' && tooltipData[0].structureMoney !== undefined) {
                        nodeHtml += '<span class="tooltip-content green">' + tooltipData[0].structureMoney + '</span>';
                    }
                    if (tooltipData[0].structurePeople !== '' && tooltipData[0].structurePeople !== undefined) {
                        nodeHtml += '<span class="tooltip-content green">' + tooltipData[0].structurePeople + '</span>';
                    }
                    
                   


                    nodeHtml += '</div></div>';

                    $('#tree').append(nodeHtml);

                    $('.tooltip-js-wrapp').css({
                        top: childOffset.top + height + 20,
                        left: childOffset.left
                    });
                }
            }
        });

        $(document).on('mouseenter', 'g[node-id].disabled-node', function () {
            var node = $(this),
                id = node.attr('node-id');

            var childPos = getOffset(node[0]);
            var parentPos = $('#tree').offset();
            var childOffset = {
                top: childPos.top - parentPos.top,
                left: childPos.left - parentPos.left
            }

            var height = node[0].getBoundingClientRect().height;

            var nodeHtml = '<div class="tooltip-js-wrapp"><div class="tooltip-js">';

            nodeHtml += '<p>Вы не получаете выплаты с это ветки</p>';
            nodeHtml += '<a href="">Почему?</a>';

            nodeHtml += '</div></div>';

            $('#tree').append(nodeHtml);

            $('.tooltip-js-wrapp').css({
                top: childOffset.top + height + 20,
                left: childOffset.left
            });
        });

        $(document).on('mouseenter', '#tree .tooltip-js-wrapp', function () {
            $(this).addClass('hover-tooltip');
        });

        $(document).on('mouseleave', '#tree .tooltip-js-wrapp', function () {
            $(this).removeClass('hover-tooltip');

            var alert = $('#tree .tooltip-js-wrapp');
            setTimeout(function () {
                if (!alert.hasClass('hover-tooltip')) {
                    alert.remove();
                }
            }, 300);
        });

        $(document).on('mouseleave', 'g[node-id]', function () {
            var alert = $('#tree .tooltip-js-wrapp');
            setTimeout(function () {
                if (!alert.hasClass('hover-tooltip')) {
                    alert.remove();
                }
            }, 300);
        });

        $(document).on('click', '[data-search-item-id]', function () {
            var input = $(this),
                id = input.attr('data-search-item-id');

            if (id !== '' && id !== undefined) {
                $('g[node-id="' + id + '"]').addClass('search')
            }

            input.parent().html('');
        });

        $('[placeholder="Search"]').attr('placeholder', 'Поиск');
    };
