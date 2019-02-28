var Berserker_skills = [
	level5 = [
		{
			"name": "Dreadnaught",
			"desc": "Increase total Health 75%."
		},
		{
			"name": "Skirmisher",
			"desc": "Move 20% faster and sprint 25% faster when using a perk melee weapon. You also regenerate 2 points of Health every second."
		}
	],
	level10 = [
		{
			"name": "Vampire",
			"desc": "Heal 4 points of Health for every Zed you kill with perk weapons. Attack 20% faster with perk melee weapons."
		},
		{
			"name": "Butcher",
			"desc": "Attack 20% faster and do 25% more damage with perk melee weapons."
		}
	],
	level15 = [
		{
			"name": "Resistance",
			"desc": "Gain 20% resistance to all damage. Gain additional 20% resistance to Poison and Sonic Damage."
		},
		{
			"name": "Parry",
			"desc": "Parrying with a perk melee weapon reduces incoming damage 40% and increases both melee attack speed 5% and melee damage 35% for 10 seconds."
		}
	],
	level20 = [
		{
			"name": "Smash",
			"desc": "Hard attacks with perk melee weapons do 50% more damage, do 25% more damage on head hits, and have 200% more stumble power."
		},
		{
			"name": "Massacre",
			"desc": "Light attacks with perk melee weapons do 30% more damage and all attacks with perk melee weapons are 5% faster."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Berserker Rage",
			"desc": "Heal 25% Health and Zeds close to you try to flee when you enter Zed time."
		},
		{
			"name": "ZED TIME - Spartan",
			"desc": "During Zed time, you attack with perk weapons and move in real-time."
		}
	],
	type = ["Survival", "Combat", "Close Combat", "Power", "Advanced Training"],
	passive = ["Berserker Damage: 25%", "( 1% / Level )",
			   "Damage Resistance: 15%", "( 3% / 5 Level )",
			   "+ Night Vision Capability", "",
			   "+ Clots Cannot Grab You", ""
			  ]
]

var Commando_skills = [
	level5 = [
		{
			"name": "Tactical Reload",
			"desc": "Increase reload speed with perk weapons."
		},
		{
			"name": "High Capacity Mags",
			"desc": "Increase magazine capacity of perk weapons 50%."
		}
	],
	level10 = [
		{
			"name": "Fallback",
			"desc": "Increase damage with your 9mm pistol and knife 50%, and increase weapon switching speed 50%."
		},
		{
			"name": "Impact Rounds",
			"desc": "Increase stumble power for perk weapons 150%."
		}
	],
	level15 = [
		{
			"name": "Tenacious",
			"desc": "Increase total Health and Armor 25%."
		},
		{
			"name": "Prepared",
			"desc": "Carry up to 20% more ammo for each perk weapon."
		}
	],
	level20 = [
		{
			"name": "Hollow Point Rounds",
			"desc": "Increase damage of perk weapons 25% and reduce their recoil 50%."
		},
		{
			"name": "Eat Lead",
			"desc": "Increase magazine capacity of perk weapons 100%."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Tactician",
			"desc": "During Zed time, you reload perk weapons at full speed and switch perk weapons twice as fast."
		},
		{
			"name": "ZED TIME - Machine Gunner",
			"desc": "During Zed time, you do 3% more damage and shoot 3x faster with perk weapons."
		}
	],
	type = ["Ammo Management", "Tactics", "Survival", "Weapon Specialist", "Advanced Training"],
	passive = ["Perk Weapon Damage: 25%", "( 1% / Level )",
			   "Cloaked Enemy & Health Bar: 60m", "( 10 + 2m / Level )",
			   "Zed Time Extension: 6 sec", "( 1 + 1 sec / 5 Level )",
			   "Reload Speed: 10%", "( 2% / 5 Level )",
			   "+ Night Vision Capability", "",
			   "+ Call Out Cloaked Zeds", ""
			  ]
]

var Support_skills = [
	level5 = [
		{
			"name": "High Capacity Magazines",
			"desc": "Increase magazine capacity of perk weapons 50%."
		},
		{
			"name": "Tactical Reload",
			"desc": "Increase reload speed with perk weapons."
		}
	],
	level10 = [
		{
			"name": "Fortitude",
			"desc": "Increase total Health by 50%."
		},
		{
			"name": "Salvo",
			"desc": "Increase damage of perk weapons 30%."
		}
	],
	level15 = [
		{
			"name": "Armor Piercing Shot",
			"desc": "Greatly Increase penetration with perk weapons."
		},
		{
			"name": "Tight Choke",
			"desc": "Decrease shot spread of perk weapons by 50%."
		}
	],
	level20 = [
		{
			"name": "Resupply Pack",
			"desc": "Your teammates can get 30% ammo and 20% armor restored by interacting with you once per wave. You can carry up to 20% more ammo for perk weapons."
		},
		{
			"name": "Concussion Rounds",
			"desc": "Increase stumble power for perk weapons 150%."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Penetrator",
			"desc": "During Zed time, your perk weapons penetrate through any targets they hit."
		},
		{
			"name": "ZED TIME - Barrage",
			"desc": "During Zed time, your perk weapons shoot in near real-time."
		}
	],
	type = ["Ammo Management", "Training", "Firepower", "Logistics", "Advanced Training"],
	passive = ["Welding Proficiency: 75%", "( 3% / Level )",
			   "Shotgun Damage: 25%", "( 1% / Level )",
			   "Shotgun Penetration: 500%", "( 20% / Level )",
			   "Ammo: 25%", "( 1% / Level )",
			   "+ Increased Weight Capacity", "",
			   "+ Ammo Backpack", "",
			   "+ Door Repair", ""
			  ]
]

var Field_Medic_skills = [
	level5 = [
		{
			"name": "Symbiotic Health",
			"desc": "Increase total Health 25%. Healing teammates will heal you 10% of your total Health."
		},
		{
			"name": "Resilience",
			"desc": "Increase damage resistance 1% per Health point lost, up to 50%."
		}
	],
	level10 = [
		{
			"name": "Adrenaline Shot",
			"desc": "Shooting teammates with healing darts increases their movement speed 10% for 5 seconds. This can stack up to a 30% bonus."
		},
		{
			"name": "Combatant Doctor",
			"desc": "Increase magazine capacity of perk weapons 50% and movement speed by 10%."
		}
	],
	level15 = [
		{
			"name": "Focus Injection",
			"desc": "Shooting teammates with healing darts increases the damage they inflict 5% for 5 seconds. This can stack up to a 20% bonus."
		},
		{
			"name": "Acidic Rounds",
			"desc": "Perk weapons can poison Zeds, inflicting poison damage over time."
		}
	],
	level20 = [
		{
			"name": "Coagulant Booster",
			"desc": "Shooting teammates with healing darts increases their damage resistance 10% for 5 seconds. This can stack up to a 30% bonus."
		},
		{
			"name": "Battle Surgeon",
			"desc": "Increase damage with perk weapons 20%."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Airborne Agent",
			"desc": "You release a healing gas during Zed time, healing teammates close by."
		},
		{
			"name": "ZED TIME - Zedative",
			"desc": "During Zed time, damaging Zeds with perk weapons will slow them 30% and do massive amounts of poison damage."
		}
	],
	type = ["Conditioning", "Movement", "Damage", "Combat Technician", "Advanced Tech"],
	passive = ["Syringe Recharge Rate: 200%", "( 8% / Level )",
			   "Syringe Potency: 50%", "( 2% / Level )",
			   "Bloat Bile Resistance: 50%", "( 2% / Level )",
			   "Movement Speed: 10%", "( 0.4% / Level )",
			   "Armor Bonus: 75%", "( 3% / Level )"
			  ]
]

var Demolitionist_skills = [
	level5 = [
		{
			"name": "Bombardier",
			"desc": "Increase damage of explosive perk weapons 25%."
		},
		{
			"name": "Shock Trooper",
			"desc": "Reload perk weapons 20% faster and increase their knowdown and stumble power 25%."
		}
	],
	level10 = [
		{
			"name": "High Impact Rounds",
			"desc": "Increase direct hit damage with explosive weapons 20%."
		},
		{
			"name": "Extra Rounds",
			"desc": "Increase the maximum ammo for explosive perk weapons by 5."
		}
	],
	level15 = [
		{
			"name": "Sonic Resistant Rounds",
			"desc": "Your explosives are immune to the siren's scream and will always explode."
		},
		{
			"name": "Fragmentation Rounds",
			"desc": "Increase area of effect of explosive perk weapons 50%, but decrease damage 30%."
		}
	],
	level20 = [
		{
			"name": "Armor Piercing Rounds",
			"desc": "Increase damage of direct hits to critical areas with perk weapons 50%."
		},
		{
			"name": "Concussive Rounds",
			"desc": "Increase reaction, stun, stumble, and knockdown power of perk weapons 50%."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Destroyer of Worlds",
			"desc": "During Zed time, your explosives dish out massive radiation damage, poisoning Zeds, and explosive rounds will explode at any range."
		},
		{
			"name": "ZED TIME - Mad Bomber",
			"desc": "During Zed time, you shoot and reload in near real-time, the area of effect of perk weapons increases 25%, and explosive rounds will explode at any range."
		}
	],
	type = ["Technique", "Explosives", "Advanced Techniques", "Weapon Techniques", "Advanced Explosives"],
	passive = ["Perk Weapon Damage: 25%", "( 1% / Level )",
			   "Explosive Resistance: 60%", "( 10% + 2% / Level )",
			   "Extra Explosive Ammo: 5", "( 1 / 5 Level )",
			   "+ Grenade Supplier", "",
			   "+ Door Traps", "",
			   "+ Reactive Armor", ""
			  ]
]

var Firebug_skills = [
	level5 = [
		{
			"name": "Bring the Heat",
			"desc": "Increase damage with fire weapons 35%."
		},
		{
			"name": "High Capacity Fuel Tank",
			"desc": "Increase fuel tank capacity and magazines for all perk weapons 100%."
		}
	],
	level10 = [
		{
			"name": "Barbecue",
			"desc": "Perk weapons' burn effect lasts 150% longer, increasing damage over time."
		},
		{
			"name": "Ground Fire",
			"desc": "Ground fires do massively increased damage and reduce Zed movement speed 20%."
		}
	],
	level15 = [
		{
			"name": "Napalm",
			"desc": "Burning Zeds that make contact with other Zeds will light them on fire and the burn effect lasts 150% longer."
		},
		{
			"name": "Zed Shrapnel",
			"desc": "Zeds you kill with fire have a 20% chance to explode, damaging and knocking down nearby Zeds."
		}
	],
	level20 = [
		{
			"name": "Heat Wave",
			"desc": "Zed struck at point blank range with fire will stumble back."
		},
		{
			"name": "Firestorm",
			"desc": "Increase range of perk weapons."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Pyromaniac",
			"desc": "During Zed time, you attack with perk weapons in close to real time and never run out of ammo."
		},
		{
			"name": "ZED TIME - Inferno",
			"desc": "During Zed time, any Zeds hit with fire are slowed 30% and take 50% more burning damage."
		}
	],
	type = ["Supplies", "Spicy", "Burn", "Flame", "Advanced Training"],
	passive = ["Perk Weapon Damage: 20%", "( 0.8% / Level )",
			   "Perk Weapon Reload: 20%", "( 0.8% / Level )",
			   "Resist Zed Fire Damage: 80%", "( 30% + 2% / Level )",
			   "Immunity to your own Fire: 100%", "( 25% + 3% / Level )",
			   "Starting Ammo: 25%", "( 5% / 5 Level )"
			  ]
]

var Gunslinger_skills = [
	level5 = [
		{
			"name": "Steady",
			"desc": "Ignore movement speed penalty for iron sights and drastically reduce weapon bob with perk weapons."
		},
		{
			"name": "Quick Draw",
			"desc": "Reduce recoil penalty for shooting from the hip, increase movement speed 5%, and switch perk weapons 50% faster."
		}
	],
	level10 = [
		{
			"name": "Rack ‘em Up",
			"desc": "Consecutive headshots with perk weapons increases damage 10%, to a maximum of 50%."
		},
		{
			"name": "Bone Breaker",
			"desc": "Increase damage with perk weapons 20% and inflict 30% more damage to arms and legs."
		}
	],
	level15 = [
		{
			"name": "Line 'em Up",
			"desc": "Suffer no damage reduction from shooting through Zeds to hit other Zeds with perk weapons."
		},
		{
			"name": "Speedloader",
			"desc": "Increase reload speed with perk weapons."
		}
	],
	level20 = [
		{
			"name": "Skullcracker",
			"desc": "Headshots with perk weapons slow Zeds 30%."
		},
		{
			"name": "Knock 'em Down",
			"desc": "Shooting sprinting Zeds in the legs massively increases knockdown power. Shooting Zeds in the chest with perk weapons massively increases stumble power."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Whirlwind of Lead",
			"desc": "During Zed time, your perk weapons can't run out of ammo."
		},
		{
			"name": "ZED TIME - Fan Fire",
			"desc": "During Zed time, your perk weapons will shoot 3x faster and reload in real-time."
		}
	],
	type = ["Technique", "Skill", "Advanced Techniques", "Critical hits", "Master Techniques"],
	passive = ["Perk Weapon Damage: 25%", "( 1% / Level )",
			   "Bullet Resistance: 30%", "( 5% + 1% / Level )",
			   "Movement Speed: 20%", "( 0.8% / Level )",
			   "Recoil: 25%", "( 1% / Level )",
			   "Zedtime Reload: 75%", "( 3% / Level )"
			  ]
]

var Sharpshooter_skills = [
	level5 = [
		{
			"name": "Sniper",
			"desc": "Increase damage 25% while stationary and using perk weapons."
		},
		{
			"name": "Marksman",
			"desc": "increase shooting speed by 25% and movement speed by 10% when using perk weapons."
		}
	],
	level10 = [
		{
			"name": "Stability",
			"desc": "Increase damage 30%, movement speed 50%, and reload speed 20% while crouching and using a perk weapon."
		},
		{
			"name": "Ballistic Shock",
			"desc": "Increase stun power of perk weapons 100%."
		}
	],
	level15 = [
		{
			"name": "Rack 'em Up",
			"desc": "Each consecutive headshot with a perk weapon increases damage 10%, up to a maximum of 50%."
		},
		{
			"name": "Tactical Reload",
			"desc": "Increase reload speed with perk weapons."
		}
	],
	level20 = [
		{
			"name": "Dead Eye",
			"desc": "Reduce recoil 10% and increase head shot damage 10% when using iron sights with a perk weapon."
		},
		{
			"name": "Always Prepared",
			"desc": "Carry up to 25% more ammo for perk weapons and grenades."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Assassin",
			"desc": "Any head shots with perk weapons have a 5% chance to trigger Zed time. During Zed time, increase head shot damage with perk weapons 35%."
		},
		{
			"name": "ZED TIME - Ranger",
			"desc": "Any head shots with perk weapons have a 5% chance to trigger Zed time. During Zed time, your head shots with perk weapons will stun any Zed."
		}
	],
	type = ["Movement", "Basic Technique", "Skill", "Equipment", "Master Techniques"],
	passive = ["Headshot Damage: 25%", "( 1% / Level )",
			   "Recoil: 25%", "( 1% / Level )",
			   "Weapon Switch: 50%", "( 2% / Level )"
			  ]
]

var SWAT_skills = [
	level5 = [
		{
			"name": "Heavy Armor Training",
			"desc": "While you have body armor, you only take Heath damage from sonic attacks and clots can't grab you. You begin each game with 50% Armor."
		},
		{
			"name": "Tactical Movement",
			"desc": "No movement penalty for using iron sights or crouch movement with perk weapons."
		}
	],
	level10 = [
		{
			"name": "Close Combat Training",
			"desc": "Increase damage with your 9mm pistol and knife 50%. You begin each game with dual 9mm pistols."
		},
		{
			"name": "Tactical Reload",
			"desc": "Increase reload speed with perk weapons."
		}
	],
	level15 = [
		{
			"name": "Suppression Rounds",
			"desc": "Increase stumble power 100% with all perk weapons."
		},
		{
			"name": "Ammo Vest",
			"desc": "Carry up to 30% more ammo for each perk weapon."
		}
	],
	level20 = [
		{
			"name": "Assault Armor",
			"desc": "Maximum Armor increases by 50%. You begin each game with 50% Armor, which stacks with Armor gained from Heavy Armor Traning."
		},
		{
			"name": "Cripple",
			"desc": "Multiple hit with perk weaons will slow Zeds down up to 30%. Hitting legs is most effective."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Battering Ram",
			"desc": "During Zed time, you move in real-time and have massive knockdown power when you run into a Zed."
		},
		{
			"name": "ZED TIME - Rapid Assault",
			"desc": "During Zed time, when using perk weapons you have unlimited ammo, shooting near real-time, and incrase stumble power by 100%."
		}
	],
	type = ["Specialization", "Assault Technique", "Equipment", "Defensive Techniques", "Specialist Training"],
	passive = ["Perk Weapon Damage: 25%", "( 1% / Level )",
			   "Bullet Resistance: 30%", "( 5% + 1% / Level )",
			   "Increased Mag Size: 100%", "( 4% / Level )",
			   "Weapon Switch Speed: 25%", "( 1% / Level )"
			  ]
]

var Survivalist_skills = [
	level5 = [
		{
			"name": "Tactical Reload",
			"desc": "Increase reload speed with Commando, Gunslinger, and SWAT weapons."
		},
		{
			"name": "Heavy Weapons Training",
			"desc": "Increase reload speed with Demolitionist, Sharpshooter, and Support weapons."
		}
	],
	level10 = [
		{
			"name": "Medic Training",
			"desc": "Increase the potency of all your healing 20% and decrease the cooldown of your syringe and healing darts 25%."
		},
		{
			"name": "Melee Expert",
			"desc": "Increase melee attack speed 15%, inflict 10% more damage, and move 25% faster when using any melee weapon."
		}
	],
	level15 = [
		{
			"name": "Ammo Vest",
			"desc": "Carry up to 15% more ammo for all weapons and your grenade become a healing grenade."
		},
		{
			"name": "Weapon Harness",
			"desc": "Increase carrying capacity by 5 and your grenade becomes a molotov cocktail."
		}
	],
	level20 = [
		{
			"name": "Spontaneous Zed-plosion",
			"desc": "Zed you kill have a 20% chance to explode, damaging and knocking down nearby Zeds."
		},
		{
			"name": "Make Things go Boom",
			"desc": "Increase area of effect of all Explosives 25%."
		}
	],
	level25 = [
		{
			"name": "ZED TIME - Madman",
			"desc": "During Zed time, all your weapons shoot 3x faster."
		},
		{
			"name": "ZED TIME - Lockdown",
			"desc": "During Zed time, the power of all incapacitation methods are increased 200% for all weapons."
		}
	],
	type = ["Weapon Handling", "Survival Technique", "Equipment", "Destruction", "Specialist Training"],
	passive = ["Perk Weapon Damage: 25%", "( 1% / Level )",
			   "Bullet Resistance: 30%", "( 5% + 1% / Level )",
			   "Increased Mag Size: 100%", "( 4% / Level )",
			   "Weapon Switch Speed: 25%", "( 1% / Level )"
			  ]
]