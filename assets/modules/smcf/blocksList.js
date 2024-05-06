const blocks = [
	"acacia_button",
	"acacia_door",
	"acacia_double_slab",
	"acacia_fence",
	"acacia_fence_gate",
	"acacia_hanging_sign",
	"acacia_leaves",
	"acacia_log",
	"acacia_planks",
	"acacia_pressure_plate",
	"acacia_sapling",
	"acacia_slab",
	"acacia_stairs",
	"acacia_standing_sign",
	"acacia_trapdoor",
	"acacia_wall_sign",
	"acacia_wood",
	"activator_rail",
	"air",
	"allium",
	"allow",
	"amethyst_block",
	"amethyst_cluster",
	"ancient_debris",
	"andesite",
	"andesite_stairs",
	"anvil",
	"azalea",
	"azalea_leaves",
	"azalea_leaves_flowered",
	"azure_bluet",
	"bamboo",
	"bamboo_block",
	"bamboo_button",
	"bamboo_door",
	"bamboo_double_slab",
	"bamboo_fence",
	"bamboo_fence_gate",
	"bamboo_hanging_sign",
	"bamboo_mosaic",
	"bamboo_mosaic_double_slab",
	"bamboo_mosaic_slab",
	"bamboo_mosaic_stairs",
	"bamboo_planks",
	"bamboo_pressure_plate",
	"bamboo_sapling",
	"bamboo_slab",
	"bamboo_stairs",
	"bamboo_standing_sign",
	"bamboo_trapdoor",
	"bamboo_wall_sign",
	"barrel",
	"barrier",
	"basalt",
	"beacon",
	"bed",
	"bedrock",
	"bee_nest",
	"beehive",
	"beetroot",
	"bell",
	"big_dripleaf",
	"birch_button",
	"birch_door",
	"birch_double_slab",
	"birch_fence",
	"birch_fence_gate",
	"birch_hanging_sign",
	"birch_leaves",
	"birch_log",
	"birch_planks",
	"birch_pressure_plate",
	"birch_sapling",
	"birch_slab",
	"birch_stairs",
	"birch_standing_sign",
	"birch_trapdoor",
	"birch_wall_sign",
	"birch_wood",
	"black_candle",
	"black_candle_cake",
	"black_carpet",
	"black_concrete",
	"black_concrete_powder",
	"black_glazed_terracotta",
	"black_shulker_box",
	"black_stained_glass",
	"black_stained_glass_pane",
	"black_terracotta",
	"black_wool",
	"blackstone",
	"blackstone_double_slab",
	"blackstone_slab",
	"blackstone_stairs",
	"blackstone_wall",
	"blast_furnace",
	"blue_candle",
	"blue_candle_cake",
	"blue_carpet",
	"blue_concrete",
	"blue_concrete_powder",
	"blue_glazed_terracotta",
	"blue_ice",
	"blue_orchid",
	"blue_shulker_box",
	"blue_stained_glass",
	"blue_stained_glass_pane",
	"blue_terracotta",
	"blue_wool",
	"bone_block",
	"bookshelf",
	"border_block",
	"brain_coral",
	"brain_coral_fan",
	"brewing_stand",
	"brick_block",
	"brick_stairs",
	"brown_candle",
	"brown_candle_cake",
	"brown_carpet",
	"brown_concrete",
	"brown_concrete_powder",
	"brown_glazed_terracotta",
	"brown_mushroom",
	"brown_mushroom_block",
	"brown_shulker_box",
	"brown_stained_glass",
	"brown_stained_glass_pane",
	"brown_terracotta",
	"brown_wool",
	"bubble_column",
	"bubble_coral",
	"bubble_coral_fan",
	"budding_amethyst",
	"cactus",
	"cake",
	"calcite",
	"calibrated_sculk_sensor",
	"campfire",
	"candle",
	"candle_cake",
	"carrots",
	"cartography_table",
	"carved_pumpkin",
	"cauldron",
	"cave_vines",
	"cave_vines_body_with_berries",
	"cave_vines_head_with_berries",
	"chain",
	"chain_command_block",
	"cherry_button",
	"cherry_door",
	"cherry_double_slab",
	"cherry_fence",
	"cherry_fence_gate",
	"cherry_hanging_sign",
	"cherry_leaves",
	"cherry_log",
	"cherry_planks",
	"cherry_pressure_plate",
	"cherry_sapling",
	"cherry_slab",
	"cherry_stairs",
	"cherry_standing_sign",
	"cherry_trapdoor",
	"cherry_wall_sign",
	"cherry_wood",
	"chest",
	"chiseled_bookshelf",
	"chiseled_deepslate",
	"chiseled_nether_bricks",
	"chiseled_polished_blackstone",
	"chorus_flower",
	"chorus_plant",
	"clay",
	"coal_block",
	"coal_ore",
	"cobbled_deepslate",
	"cobbled_deepslate_double_slab",
	"cobbled_deepslate_slab",
	"cobbled_deepslate_stairs",
	"cobbled_deepslate_wall",
	"cobblestone",
	"cobblestone_wall",
	"cocoa",
	"command_block",
	"composter",
	"conduit",
	"copper_block",
	"copper_ore",
	"coral_block",
	"coral_fan_hang",
	"coral_fan_hang2",
	"coral_fan_hang3",
	"cornflower",
	"cracked_deepslate_bricks",
	"cracked_deepslate_tiles",
	"cracked_nether_bricks",
	"cracked_polished_blackstone_bricks",
	"crafting_table",
	"crimson_button",
	"crimson_door",
	"crimson_double_slab",
	"crimson_fence",
	"crimson_fence_gate",
	"crimson_fungus",
	"crimson_hanging_sign",
	"crimson_hyphae",
	"crimson_nylium",
	"crimson_planks",
	"crimson_pressure_plate",
	"crimson_roots",
	"crimson_slab",
	"crimson_stairs",
	"crimson_standing_sign",
	"crimson_stem",
	"crimson_trapdoor",
	"crimson_wall_sign",
	"crying_obsidian",
	"cut_copper",
	"cut_copper_slab",
	"cut_copper_stairs",
	"cyan_candle",
	"cyan_candle_cake",
	"cyan_carpet",
	"cyan_concrete",
	"cyan_concrete_powder",
	"cyan_glazed_terracotta",
	"cyan_shulker_box",
	"cyan_stained_glass",
	"cyan_stained_glass_pane",
	"cyan_terracotta",
	"cyan_wool",
	"dark_oak_button",
	"dark_oak_door",
	"dark_oak_double_slab",
	"dark_oak_fence",
	"dark_oak_fence_gate",
	"dark_oak_hanging_sign",
	"dark_oak_leaves",
	"dark_oak_log",
	"dark_oak_planks",
	"dark_oak_pressure_plate",
	"dark_oak_sapling",
	"dark_oak_slab",
	"dark_oak_stairs",
	"dark_oak_trapdoor",
	"dark_oak_wood",
	"dark_prismarine_stairs",
	"darkoak_standing_sign",
	"darkoak_wall_sign",
	"daylight_detector",
	"daylight_detector_inverted",
	"dead_brain_coral",
	"dead_brain_coral_fan",
	"dead_bubble_coral",
	"dead_bubble_coral_fan",
	"dead_fire_coral",
	"dead_fire_coral_fan",
	"dead_horn_coral",
	"dead_horn_coral_fan",
	"dead_tube_coral",
	"dead_tube_coral_fan",
	"deadbush",
	"decorated_pot",
	"deepslate",
	"deepslate_brick_double_slab",
	"deepslate_brick_slab",
	"deepslate_brick_stairs",
	"deepslate_brick_wall",
	"deepslate_bricks",
	"deepslate_coal_ore",
	"deepslate_copper_ore",
	"deepslate_diamond_ore",
	"deepslate_emerald_ore",
	"deepslate_gold_ore",
	"deepslate_iron_ore",
	"deepslate_lapis_ore",
	"deepslate_redstone_ore",
	"deepslate_tile_double_slab",
	"deepslate_tile_slab",
	"deepslate_tile_stairs",
	"deepslate_tile_wall",
	"deepslate_tiles",
	"deny",
	"detector_rail",
	"diamond_block",
	"diamond_ore",
	"diorite",
	"diorite_stairs",
	"dirt",
	"dirt_with_roots",
	"dispenser",
	"double_cut_copper_slab",
	"double_plant",
	"double_stone_block_slab",
	"double_stone_block_slab2",
	"double_stone_block_slab3",
	"double_stone_block_slab4",
	"dragon_egg",
	"dried_kelp_block",
	"dripstone_block",
	"dropper",
	"emerald_block",
	"emerald_ore",
	"enchanting_table",
	"end_brick_stairs",
	"end_bricks",
	"end_portal",
	"end_portal_frame",
	"end_rod",
	"end_stone",
	"ender_chest",
	"exposed_copper",
	"exposed_cut_copper",
	"exposed_cut_copper_slab",
	"exposed_cut_copper_stairs",
	"exposed_double_cut_copper_slab",
	"farmland",
	"fence_gate",
	"fire",
	"fire_coral",
	"fire_coral_fan",
	"fletching_table",
	"flower_pot",
	"flowering_azalea",
	"flowing_lava",
	"flowing_water",
	"frame",
	"frog_spawn",
	"frosted_ice",
	"furnace",
	"gilded_blackstone",
	"glass",
	"glass_pane",
	"glow_frame",
	"glow_lichen",
	"glowstone",
	"gold_block",
	"gold_ore",
	"golden_rail",
	"granite",
	"granite_stairs",
	"grass_block",
	"grass_path",
	"gravel",
	"gray_candle",
	"gray_candle_cake",
	"gray_carpet",
	"gray_concrete",
	"gray_concrete_powder",
	"gray_glazed_terracotta",
	"gray_shulker_box",
	"gray_stained_glass",
	"gray_stained_glass_pane",
	"gray_terracotta",
	"gray_wool",
	"green_candle",
	"green_candle_cake",
	"green_carpet",
	"green_concrete",
	"green_concrete_powder",
	"green_glazed_terracotta",
	"green_shulker_box",
	"green_stained_glass",
	"green_stained_glass_pane",
	"green_terracotta",
	"green_wool",
	"grindstone",
	"hanging_roots",
	"hardened_clay",
	"hay_block",
	"heavy_weighted_pressure_plate",
	"honey_block",
	"honeycomb_block",
	"hopper",
	"horn_coral",
	"horn_coral_fan",
	"ice",
	"infested_deepslate",
	"iron_bars",
	"iron_block",
	"iron_door",
	"iron_ore",
	"iron_trapdoor",
	"jukebox",
	"jungle_button",
	"jungle_door",
	"jungle_double_slab",
	"jungle_fence",
	"jungle_fence_gate",
	"jungle_hanging_sign",
	"jungle_leaves",
	"jungle_log",
	"jungle_planks",
	"jungle_pressure_plate",
	"jungle_sapling",
	"jungle_slab",
	"jungle_stairs",
	"jungle_standing_sign",
	"jungle_trapdoor",
	"jungle_wall_sign",
	"jungle_wood",
	"kelp",
	"ladder",
	"lantern",
	"lapis_block",
	"lapis_ore",
	"large_amethyst_bud",
	"lava",
	"lectern",
	"lever",
	"light_block",
	"light_blue_candle",
	"light_blue_candle_cake",
	"light_blue_carpet",
	"light_blue_concrete",
	"light_blue_concrete_powder",
	"light_blue_glazed_terracotta",
	"light_blue_shulker_box",
	"light_blue_stained_glass",
	"light_blue_stained_glass_pane",
	"light_blue_terracotta",
	"light_blue_wool",
	"light_gray_candle",
	"light_gray_candle_cake",
	"light_gray_carpet",
	"light_gray_concrete",
	"light_gray_concrete_powder",
	"light_gray_shulker_box",
	"light_gray_stained_glass",
	"light_gray_stained_glass_pane",
	"light_gray_terracotta",
	"light_gray_wool",
	"light_weighted_pressure_plate",
	"lightning_rod",
	"lily_of_the_valley",
	"lime_candle",
	"lime_candle_cake",
	"lime_carpet",
	"lime_concrete",
	"lime_concrete_powder",
	"lime_glazed_terracotta",
	"lime_shulker_box",
	"lime_stained_glass",
	"lime_stained_glass_pane",
	"lime_terracotta",
	"lime_wool",
	"lit_blast_furnace",
	"lit_deepslate_redstone_ore",
	"lit_furnace",
	"lit_pumpkin",
	"lit_redstone_lamp",
	"lit_redstone_ore",
	"lit_smoker",
	"lodestone",
	"loom",
	"magenta_candle",
	"magenta_candle_cake",
	"magenta_carpet",
	"magenta_concrete",
	"magenta_concrete_powder",
	"magenta_glazed_terracotta",
	"magenta_shulker_box",
	"magenta_stained_glass",
	"magenta_stained_glass_pane",
	"magenta_terracotta",
	"magenta_wool",
	"magma",
	"mangrove_button",
	"mangrove_door",
	"mangrove_double_slab",
	"mangrove_fence",
	"mangrove_fence_gate",
	"mangrove_hanging_sign",
	"mangrove_leaves",
	"mangrove_log",
	"mangrove_planks",
	"mangrove_pressure_plate",
	"mangrove_propagule",
	"mangrove_roots",
	"mangrove_slab",
	"mangrove_stairs",
	"mangrove_standing_sign",
	"mangrove_trapdoor",
	"mangrove_wall_sign",
	"mangrove_wood",
	"medium_amethyst_bud",
	"melon_block",
	"melon_stem",
	"mob_spawner",
	"monster_egg",
	"moss_block",
	"moss_carpet",
	"mossy_cobblestone",
	"mossy_cobblestone_stairs",
	"mossy_stone_brick_stairs",
	"mud",
	"mud_brick_double_slab",
	"mud_brick_slab",
	"mud_brick_stairs",
	"mud_brick_wall",
	"mud_bricks",
	"muddy_mangrove_roots",
	"mycelium",
	"nether_brick",
	"nether_brick_fence",
	"nether_brick_stairs",
	"nether_gold_ore",
	"nether_sprouts",
	"nether_wart",
	"nether_wart_block",
	"netherite_block",
	"netherrack",
	"normal_stone_stairs",
	"noteblock",
	"oak_double_slab",
	"oak_fence",
	"oak_hanging_sign",
	"oak_leaves",
	"oak_log",
	"oak_planks",
	"oak_sapling",
	"oak_slab",
	"oak_stairs",
	"oak_wood",
	"observer",
	"obsidian",
	"ochre_froglight",
	"orange_candle",
	"orange_candle_cake",
	"orange_carpet",
	"orange_concrete",
	"orange_concrete_powder",
	"orange_glazed_terracotta",
	"orange_shulker_box",
	"orange_stained_glass",
	"orange_stained_glass_pane",
	"orange_terracotta",
	"orange_tulip",
	"orange_wool",
	"oxeye_daisy",
	"oxidized_copper",
	"oxidized_cut_copper",
	"oxidized_cut_copper_slab",
	"oxidized_cut_copper_stairs",
	"oxidized_double_cut_copper_slab",
	"packed_ice",
	"packed_mud",
	"pearlescent_froglight",
	"pink_candle",
	"pink_candle_cake",
	"pink_carpet",
	"pink_concrete",
	"pink_concrete_powder",
	"pink_glazed_terracotta",
	"pink_petals",
	"pink_shulker_box",
	"pink_stained_glass",
	"pink_stained_glass_pane",
	"pink_terracotta",
	"pink_tulip",
	"pink_wool",
	"piston",
	"piston_arm_collision",
	"pitcher_crop",
	"pitcher_plant",
	"podzol",
	"pointed_dripstone",
	"polished_andesite",
	"polished_andesite_stairs",
	"polished_basalt",
	"polished_blackstone",
	"polished_blackstone_brick_double_slab",
	"polished_blackstone_brick_slab",
	"polished_blackstone_brick_stairs",
	"polished_blackstone_brick_wall",
	"polished_blackstone_bricks",
	"polished_blackstone_button",
	"polished_blackstone_double_slab",
	"polished_blackstone_pressure_plate",
	"polished_blackstone_slab",
	"polished_blackstone_stairs",
	"polished_blackstone_wall",
	"polished_deepslate",
	"polished_deepslate_double_slab",
	"polished_deepslate_slab",
	"polished_deepslate_stairs",
	"polished_deepslate_wall",
	"polished_diorite",
	"polished_diorite_stairs",
	"polished_granite",
	"polished_granite_stairs",
	"poppy",
	"portal",
	"potatoes",
	"powder_snow",
	"powered_comparator",
	"powered_repeater",
	"prismarine",
	"prismarine_bricks_stairs",
	"prismarine_stairs",
	"pumpkin",
	"pumpkin_stem",
	"purple_candle",
	"purple_candle_cake",
	"purple_carpet",
	"purple_concrete",
	"purple_concrete_powder",
	"purple_glazed_terracotta",
	"purple_shulker_box",
	"purple_stained_glass",
	"purple_stained_glass_pane",
	"purple_terracotta",
	"purple_wool",
	"purpur_block",
	"purpur_stairs",
	"quartz_block",
	"quartz_bricks",
	"quartz_ore",
	"quartz_stairs",
	"rail",
	"raw_copper_block",
	"raw_gold_block",
	"raw_iron_block",
	"red_candle",
	"red_candle_cake",
	"red_carpet",
	"red_concrete",
	"red_concrete_powder",
	"red_glazed_terracotta",
	"red_mushroom",
	"red_mushroom_block",
	"red_nether_brick",
	"red_nether_brick_stairs",
	"red_sandstone",
	"red_sandstone_stairs",
	"red_shulker_box",
	"red_stained_glass",
	"red_stained_glass_pane",
	"red_terracotta",
	"red_tulip",
	"red_wool",
	"redstone_block",
	"redstone_lamp",
	"redstone_ore",
	"redstone_torch",
	"redstone_wire",
	"reeds",
	"reinforced_deepslate",
	"repeating_command_block",
	"respawn_anchor",
	"sand",
	"sandstone",
	"sandstone_stairs",
	"scaffolding",
	"sculk",
	"sculk_catalyst",
	"sculk_sensor",
	"sculk_shrieker",
	"sculk_vein",
	"sea_lantern",
	"sea_pickle",
	"seagrass",
	"shroomlight",
	"silver_glazed_terracotta",
	"skull",
	"slime",
	"small_amethyst_bud",
	"small_dripleaf_block",
	"smithing_table",
	"smoker",
	"smooth_basalt",
	"smooth_quartz_stairs",
	"smooth_red_sandstone_stairs",
	"smooth_sandstone_stairs",
	"smooth_stone",
	"sniffer_egg",
	"snow",
	"snow_layer",
	"soul_campfire",
	"soul_fire",
	"soul_lantern",
	"soul_sand",
	"soul_soil",
	"soul_torch",
	"sponge",
	"spore_blossom",
	"spruce_button",
	"spruce_door",
	"spruce_double_slab",
	"spruce_fence",
	"spruce_fence_gate",
	"spruce_hanging_sign",
	"spruce_leaves",
	"spruce_log",
	"spruce_planks",
	"spruce_pressure_plate",
	"spruce_sapling",
	"spruce_slab",
	"spruce_stairs",
	"spruce_standing_sign",
	"spruce_trapdoor",
	"spruce_wall_sign",
	"spruce_wood",
	"standing_banner",
	"standing_sign",
	"sticky_piston",
	"sticky_piston_arm_collision",
	"stone",
	"stone_block_slab",
	"stone_block_slab2",
	"stone_block_slab3",
	"stone_block_slab4",
	"stone_brick_stairs",
	"stone_button",
	"stone_pressure_plate",
	"stone_stairs",
	"stonebrick",
	"stonecutter_block",
	"stripped_acacia_log",
	"stripped_acacia_wood",
	"stripped_bamboo_block",
	"stripped_birch_log",
	"stripped_birch_wood",
	"stripped_cherry_log",
	"stripped_cherry_wood",
	"stripped_crimson_hyphae",
	"stripped_crimson_stem",
	"stripped_dark_oak_log",
	"stripped_dark_oak_wood",
	"stripped_jungle_log",
	"stripped_jungle_wood",
	"stripped_mangrove_log",
	"stripped_mangrove_wood",
	"stripped_oak_log",
	"stripped_oak_wood",
	"stripped_spruce_log",
	"stripped_spruce_wood",
	"stripped_warped_hyphae",
	"stripped_warped_stem",
	"structure_block",
	"structure_void",
	"suspicious_gravel",
	"suspicious_sand",
	"sweet_berry_bush",
	"tallgrass",
	"target",
	"tinted_glass",
	"tnt",
	"torch",
	"torchflower",
	"torchflower_crop",
	"trapdoor",
	"trapped_chest",
	"trip_wire",
	"tripwire_hook",
	"tube_coral",
	"tube_coral_fan",
	"tuff",
	"turtle_egg",
	"twisting_vines",
	"undyed_shulker_box",
	"unlit_redstone_torch",
	"unpowered_comparator",
	"unpowered_repeater",
	"verdant_froglight",
	"vine",
	"wall_banner",
	"wall_sign",
	"warped_button",
	"warped_door",
	"warped_double_slab",
	"warped_fence",
	"warped_fence_gate",
	"warped_fungus",
	"warped_hanging_sign",
	"warped_hyphae",
	"warped_nylium",
	"warped_planks",
	"warped_pressure_plate",
	"warped_roots",
	"warped_slab",
	"warped_stairs",
	"warped_standing_sign",
	"warped_stem",
	"warped_trapdoor",
	"warped_wall_sign",
	"warped_wart_block",
	"water",
	"waterlily",
	"waxed_copper",
	"waxed_cut_copper",
	"waxed_cut_copper_slab",
	"waxed_cut_copper_stairs",
	"waxed_double_cut_copper_slab",
	"waxed_exposed_copper",
	"waxed_exposed_cut_copper",
	"waxed_exposed_cut_copper_slab",
	"waxed_exposed_cut_copper_stairs",
	"waxed_exposed_double_cut_copper_slab",
	"waxed_oxidized_copper",
	"waxed_oxidized_cut_copper",
	"waxed_oxidized_cut_copper_slab",
	"waxed_oxidized_cut_copper_stairs",
	"waxed_oxidized_double_cut_copper_slab",
	"waxed_weathered_copper",
	"waxed_weathered_cut_copper",
	"waxed_weathered_cut_copper_slab",
	"waxed_weathered_cut_copper_stairs",
	"waxed_weathered_double_cut_copper_slab",
	"weathered_copper",
	"weathered_cut_copper",
	"weathered_cut_copper_slab",
	"weathered_cut_copper_stairs",
	"weathered_double_cut_copper_slab",
	"web",
	"weeping_vines",
	"wheat",
	"white_candle",
	"white_candle_cake",
	"white_carpet",
	"white_concrete",
	"white_concrete_powder",
	"white_glazed_terracotta",
	"white_shulker_box",
	"white_stained_glass",
	"white_stained_glass_pane",
	"white_terracotta",
	"white_tulip",
	"white_wool",
	"wither_rose",
	"wooden_button",
	"wooden_door",
	"wooden_pressure_plate",
	"yellow_candle",
	"yellow_candle_cake",
	"yellow_carpet",
	"yellow_concrete",
	"yellow_concrete_powder",
	"yellow_flower",
	"yellow_glazed_terracotta",
	"yellow_shulker_box",
	"yellow_stained_glass",
	"yellow_stained_glass_pane",
	"yellow_terracotta",
	"yellow_wool"
];
