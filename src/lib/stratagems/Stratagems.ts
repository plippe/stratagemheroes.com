export enum StratagemCategory {
	Mission = 'Mission',
	Supply = 'Supply',
	Defensive = 'Defensive',
	Offensive = 'Offensive'
}

export const StratagemCategories = {
	all: Object.keys(StratagemCategory).map((key) => key as StratagemCategory)
};

export enum StratagemInput {
	Up,
	Down,
	Left,
	Right
}

export type Stratagem = {
	name: string;
	icon: string;
	inputs: StratagemInput[];
	category: StratagemCategory;
};

const Up = StratagemInput.Up;
const Right = StratagemInput.Right;
const Down = StratagemInput.Down;
const Left = StratagemInput.Left;

export const Stratagems = {
	allByCategory: (category: StratagemCategory) =>
		Stratagems.all.filter((stratagem) => stratagem.category === category),
	all: [
		// Mission
		{
			name: 'Resupply',
			icon: '/helldivers2/stratagems/mission/Resupply.webp',
			inputs: [Down, Down, Up, Right],
			category: StratagemCategory.Mission
		},
		{
			name: 'SOS Beacon',
			icon: '/helldivers2/stratagems/mission/SOSBeacon.webp',
			inputs: [Up, Down, Left, Up],
			category: StratagemCategory.Mission
		},
		{
			name: 'Reinforce',
			icon: '/helldivers2/stratagems/mission/Reinforce.webp',
			inputs: [Up, Down, Right, Left, Up],
			category: StratagemCategory.Mission
		},

		// Supply
		{
			name: 'AX/LAS-5 "Guard Dog" Rover',
			icon: '/helldivers2/stratagems/supply/AXLAS5GuardDogRover.webp',
			inputs: [Down, Up, Left, Up, Right, Right],
			category: StratagemCategory.Supply
		},
		{
			name: 'AX/AR-23 "Guard Dog"',
			icon: '/helldivers2/stratagems/supply/AXAR23GuardDog.webp',
			inputs: [Down, Up, Left, Up, Right, Down],
			category: StratagemCategory.Supply
		},
		{
			name: 'LIFT-850 Jump Pack',
			icon: '/helldivers2/stratagems/supply/LIFT850JumpPack.webp',
			inputs: [Down, Up, Up, Down, Up],
			category: StratagemCategory.Supply
		},
		{
			name: 'B-1 Supply Pack',
			icon: '/helldivers2/stratagems/supply/B1SupplyPack.webp',
			inputs: [Down, Left, Down, Up, Up, Down],
			category: StratagemCategory.Supply
		},
		{
			name: 'SH-32 Shield Generator Pack',
			icon: '/helldivers2/stratagems/supply/SH32ShieldGeneratorPack.webp',
			inputs: [Down, Up, Left, Right, Left, Right],
			category: StratagemCategory.Supply
		},
		{
			name: 'SH-20 Ballistic Shield Backpack',
			icon: '/helldivers2/stratagems/supply/SH20BallisticShieldBackpack.webp',
			inputs: [Down, Left, Up, Up, Right],
			category: StratagemCategory.Supply
		},
		{
			name: 'AC-8 Autocannon',
			icon: '/helldivers2/stratagems/supply/AC8Autocannon.webp',
			inputs: [Down, Left, Down, Up, Up, Right],
			category: StratagemCategory.Supply
		},
		{
			name: 'EAT-17 Expendable Anti-tank',
			icon: '/helldivers2/stratagems/supply/EAT17ExpendableAntitank.webp',
			inputs: [Down, Down, Left, Up, Right],
			category: StratagemCategory.Supply
		},
		{
			name: 'FLAM-40 Flamethrower',
			icon: '/helldivers2/stratagems/supply/FLAM40Flamethrower.webp',
			inputs: [Down, Left, Up, Down, Up],
			category: StratagemCategory.Supply
		},
		{
			name: 'LAS-98 Laser Cannon',
			icon: '/helldivers2/stratagems/supply/LAS98LaserCannon.webp',
			inputs: [Down, Left, Down, Up, Left],
			category: StratagemCategory.Supply
		},
		{
			name: 'M-105 Stalwart',
			icon: '/helldivers2/stratagems/supply/M105Stalwart.webp',
			inputs: [Down, Left, Down, Up, Up, Left],
			category: StratagemCategory.Supply
		},
		{
			name: 'MG-43 Machine Gun',
			icon: '/helldivers2/stratagems/supply/MG43MachineGun.webp',
			inputs: [Down, Left, Down, Up, Right],
			category: StratagemCategory.Supply
		},
		{
			name: 'ARC-3 Arc Thrower',
			icon: '/helldivers2/stratagems/supply/ARC3ArcThrower.webp',
			inputs: [Down, Right, Up, Left, Down],
			category: StratagemCategory.Supply
		},
		{
			name: 'GL-21 Grenade Launcher',
			icon: '/helldivers2/stratagems/supply/GL21GrenadeLauncher.webp',
			inputs: [Down, Left, Up, Left, Down],
			category: StratagemCategory.Supply
		},
		{
			name: 'APW-1 Anti-Materiel Rifle',
			icon: '/helldivers2/stratagems/supply/APW1AntiMaterielRifle.webp',
			inputs: [Down, Left, Right, Up, Down],
			category: StratagemCategory.Supply
		},
		{
			name: 'RS-422 Railgun',
			icon: '/helldivers2/stratagems/supply/RS422Railgun.webp',
			inputs: [Down, Right, Left, Down, Up, Left, Right],
			category: StratagemCategory.Supply
		},
		{
			name: 'GR-8 Recoilless Rifle',
			icon: '/helldivers2/stratagems/supply/GR8RecoillessRifle.webp',
			inputs: [Down, Left, Right, Right, Left],
			category: StratagemCategory.Supply
		},
		{
			name: 'FAF-14 SPEAR Launcher',
			icon: '/helldivers2/stratagems/supply/FAF14SpearLauncher.webp',
			inputs: [Down, Down, Up, Down, Down],
			category: StratagemCategory.Supply
		},

		// Defensive
		{
			name: 'A/ARC-3 Tesla Tower',
			icon: '/helldivers2/stratagems/defensive/AARC3TeslaTower.webp',
			inputs: [Down, Up, Right, Up, Left, Right],
			category: StratagemCategory.Defensive
		},
		{
			name: 'A/M-12 Mortar Sentry',
			icon: '/helldivers2/stratagems/defensive/AM12MortarSentry.webp',
			inputs: [Down, Up, Right, Right, Down],
			category: StratagemCategory.Defensive
		},
		{
			name: 'A/M-23 EMS Mortar Sentry',
			icon: '/helldivers2/stratagems/defensive/AM23EMSMortarSentry.webp',
			inputs: [Down, Down, Up, Up, Left],
			category: StratagemCategory.Defensive
		},
		{
			name: 'A/MG-43 Machine Gun Sentry',
			icon: '/helldivers2/stratagems/defensive/AMG43MachineGunSentry.webp',
			inputs: [Down, Up, Right, Right, Up],
			category: StratagemCategory.Defensive
		},
		{
			name: 'A/G-16 Gatling Sentry',
			icon: '/helldivers2/stratagems/defensive/AG16GatlingSentry.webp',
			inputs: [Down, Up, Right, Left],
			category: StratagemCategory.Defensive
		},
		{
			name: 'MD-6 Anti-Personnel Minefield',
			icon: '/helldivers2/stratagems/defensive/MD6AntiPersonnelMinefield.webp',
			inputs: [Down, Left, Up, Right],
			category: StratagemCategory.Defensive
		},
		{
			name: 'MD-I4 Incendiary Mines',
			icon: '/helldivers2/stratagems/defensive/MDI4IncendiaryMines.webp',
			inputs: [Down, Left, Left, Down],
			category: StratagemCategory.Defensive
		},
		{
			name: 'FX-12 Shield Generator Relay',
			icon: '/helldivers2/stratagems/defensive/FX12ShieldGeneratorRelay.webp',
			inputs: [Down, Up, Left, Down, Right, Right],
			category: StratagemCategory.Defensive
		},
		{
			name: 'E/MG-101 HMG Emplacement',
			icon: '/helldivers2/stratagems/defensive/EMG101HMGEmplacement.webp',
			inputs: [Down, Up, Left, Right, Right, Left],
			category: StratagemCategory.Defensive
		},
		{
			name: 'A/AC-8 Autocannon Sentry',
			icon: '/helldivers2/stratagems/defensive/AAC8AutocannonSentry.webp',
			inputs: [Down, Up, Right, Up, Left, Up],
			category: StratagemCategory.Defensive
		},
		{
			name: 'A/MLS-4X Rocket Sentry',
			icon: '/helldivers2/stratagems/defensive/AMLS4XRocketSentry.webp',
			inputs: [Down, Up, Right, Right, Left],
			category: StratagemCategory.Defensive
		},

		// Offensive
		{
			name: 'Orbital Gatling Barrage',
			icon: '/helldivers2/stratagems/offensive/OrbitalGatlingBarrage.webp',
			inputs: [Right, Down, Left, Up, Up],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital Airburst Strike',
			icon: '/helldivers2/stratagems/offensive/OrbitalAirburstStrike.webp',
			inputs: [Right, Right, Right],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital 120MM HE Barrage',
			icon: '/helldivers2/stratagems/offensive/Orbital120MMHEBarrage.webp',
			inputs: [Right, Down, Left, Right, Down],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital 380MM HE Barrage',
			icon: '/helldivers2/stratagems/offensive/Orbital380MMHEBarrage.webp',
			inputs: [Right, Down, Up, Up, Left, Down, Down],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital Walking Barrage',
			icon: '/helldivers2/stratagems/offensive/OrbitalWalkingBarrage.webp',
			inputs: [Right, Right, Down, Left, Right, Down],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital Laser',
			icon: '/helldivers2/stratagems/offensive/OrbitalLaser.webp',
			inputs: [Right, Down, Up, Right, Down],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital Railcannon Strike',
			icon: '/helldivers2/stratagems/offensive/OrbitalRailcannonStrike.webp',
			inputs: [Right, Up, Down, Down, Right],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital Precision Strike',
			icon: '/helldivers2/stratagems/offensive/OrbitalPrecisionStrike.webp',
			inputs: [Right, Right, Up],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital Gas Strike',
			icon: '/helldivers2/stratagems/offensive/OrbitalGasStrike.webp',
			inputs: [Right, Right, Down, Right],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital EMS Strike',
			icon: '/helldivers2/stratagems/offensive/OrbitalEMSStrike.webp',
			inputs: [Right, Right, Left, Down],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Orbital Smoke Strike',
			icon: '/helldivers2/stratagems/offensive/OrbitalSmokeStrike.webp',
			inputs: [Right, Right, Down, Up],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Eagle Strafing Run',
			icon: '/helldivers2/stratagems/offensive/EagleStrafingRun.webp',
			inputs: [Up, Right, Right],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Eagle Airstrike',
			icon: '/helldivers2/stratagems/offensive/EagleAirstrike.webp',
			inputs: [Up, Right, Down, Right],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Eagle Cluster Bomb',
			icon: '/helldivers2/stratagems/offensive/EagleClusterBomb.webp',
			inputs: [Up, Right, Down, Down, Right],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Eagle Napalm Strike',
			icon: '/helldivers2/stratagems/offensive/EagleNapalmStrike.webp',
			inputs: [Up, Right, Down, Up],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Eagle Smoke Strike',
			icon: '/helldivers2/stratagems/offensive/EagleSmokeStrike.webp',
			inputs: [Up, Right, Up, Down],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Eagle 110MM Rocket Pods',
			icon: '/helldivers2/stratagems/offensive/Eagle110MMRocketPods.webp',
			inputs: [Up, Right, Up, Left],
			category: StratagemCategory.Offensive
		},
		{
			name: 'Eagle 500kg Bomb',
			icon: '/helldivers2/stratagems/offensive/Eagle500kgBomb.webp',
			inputs: [Up, Right, Down, Down, Down],
			category: StratagemCategory.Offensive
		}
	]
};
