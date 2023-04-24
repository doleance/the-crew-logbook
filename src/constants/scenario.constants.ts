import { LevelInformation } from "../interfaces/level-information.interface";

export const forwardTokensAsciiCodes = [62, 8811, 8921, 11000];
export const numberTokensAsciiCodes = [49, 50, 51, 52, 53];
export const omegaTokenAsciiCode = 937;
export const noTokenAsciiCode = 8709;

export const LEVEL_INFORMATION: LevelInformation[] = [
	{
		levelNumber: 1,
		description:
			"<p>Congratulations! You have been selected from a variety of applicants to take part in the most exciting, greatest and most dangerous adventure of mankind: the search for the unknown 9th planet. As soon as you arrive at the training ground for the final tests, you'll be sitting in your first training phase: <i>Team building.</i></p>",
		orderCardsCount: 1,
	},
	{
		levelNumber: 2,
		description:
			"<p>It quickly turns out that you are perfectly coordinated with each other. Above all, your mental connection, the so-called drift compatibility, speaks for a successful cooperation. Now face the training phases 2 and 3: control technique and weightlessness.</p>",
		orderCardsCount: 2,
	},
	{
		levelNumber: 3,
		description:
			"<p>The training phases follow in quick succession. The combined Energy Supply and Emergency Prioritization course requires a high degree of logical thinking in order to understand and apply the links. Your mathematical background comes in handy here.</p>",
		orderCardsCount: 2,
		tokens: {
			numberTokenCount: 2,
		},
	},
	{
		levelNumber: 4,
		description:
			'<p>Celebrated too soon! One of you is sick and stuck in bed. <b>After everyone has looked at his hand cards, your Commander asks everyone about his or her condition. But you may only answer with "Good" or "Bad". Your Commander then decides who is ill. The sick crew member may not win a single trick.</b></p>',
	},
	{
		levelNumber: 5,
		description:
			"<p>Congratulations! You have been selected from a variety of applicants to take part in the most exciting, greatest and most dangerous adventure of mankind: the search for the unknown 9th planet. As soon as you arrive at the training ground for the final tests, you'll be sitting in your first training phase: <i>Team building.</i></p>",
		orderCardsCount: 1,
		tokens: {
			numberTokenCount: 0,
			forwardTokenCount: 0,
			hasOmegaToken: false,
		},
	},
	{
		levelNumber: 6,
		description:
			"<p>After this minor setback, your final training phase is about to begin: understanding with restricted communication. For this purpose, a <b>reception dead spot</b> is simulated, which can lead to a variety of circumstances in space. Strengthen your mental connection and pass the final tests.</p>",
		orderCardsCount: 3,
		tokens: {
			forwardTokenCount: 2,
		},
	},
	{
		levelNumber: 7,
		description:
			"<p>A memorable day! Get ready for takeoff. 10-9-8-7-6-5-4-3-2-1- LIFT OFF! The completion of your training is just the beginning of your adventure. A mighty force presses you into your seats – now there's no turning back. Under ear-splitting noise you leave the ground, the country, the continent, the planet.</p>",
		orderCardsCount: 3,
		tokens: {
			hasOmegaToken: true,
		},
	},
	{
		levelNumber: 8,
		description:
			"<p>You have reached lunar orbit, weightlessness sets in - an indescribable feeling. Numerous tests and trainings and yet the joy overwhelms you every time anew. You look back to the Earth, which was your entire cosmos so far and you can already cover it with your thumb.</p>",
		orderCardsCount: 3,
		tokens: { numberTokenCount: 3 },
	},
	{
		levelNumber: 9,
		description:
			"<p>You are suddenly torn from your thoughts when the onboard analysis module NAVI interrupts and demands your attention. In the drive electronics, a very small piece of metal has become jammed. To avoid damaging the boards, steady hands are required. <b>A 1-value card must win a trick.</b></p>",
		orderCardsCount: undefined,
	},
	{
		levelNumber: 10,
		description:
			"<p>After this little excitement right at the beginning of your mission, you are now ready to leave the moon behind. You send your status to Earth, start all control and measuring instruments, and ignite the engines. This will truly be a big step. For you and for mankind. </p>",
		orderCardsCount: 4,
	},
	{
		levelNumber: 11,
		description:
			"<p>Your radar systems report a dense meteorite field that will soon intercept your course. <b>The Commander appoints another crew member to take care of the recalculation of the course. The task demands the highest concentration, so the particular crew member cannot communicate in this mission.</b></p>",
		orderCardsCount: 4,
		tokens: { numberTokenCount: 1 },
	},
	{
		levelNumber: 12,
		description:
			"<p>You watch tensely, as you pass relatively close to the meteorites. In the excitement you mess up your paperwork, which causes a few minutes of strenuous confusion. <b>Immediately after the 1st trick, each of you must draw a random card from the crew member to your right. Then continue playing normally. </b></p>",
		orderCardsCount: 4,
		tokens: {
			hasOmegaToken: true,
		},
	},
	{
		levelNumber: 13,
		description:
			"<p>Apparently you were hit by smaller chunks despite course change. At any rate the control module shows a malfunction on the drive. Perform a thrust test on all drives to further pinpoint the problem. <b>You must win a trick with each Rocket card.</b></p>",
	},
	{
		levelNumber: 14,
		description:
			"<p>You are already close enough to Mars to be able to see Olympus Mons, the highest volcano in our solar system, with the naked eye. You take the opportunity to photograph it first and then the Martian moons Phobos and Deimos. The sight helps you get over the <b>reception dead spot which you're currently stuck in.</b> </p>",
		orderCardsCount: 4,
		tokens: { forwardTokenCount: 3 },
	},
	{
		levelNumber: 15,
		description:
			"<p>You pass Mars and leave the reception dead spot. Your thoughts turn to chocolate bars when suddenly your collision module sounds the alarm. Even before you can react properly, you are hit by a meteorite. Immediately seal off the four damaged modules and begin the repair process.</p>",
		orderCardsCount: 4,
		tokens: { numberTokenCount: 4 },
	},
	{
		levelNumber: 16,
		description:
			"<p>Overall, the shock was more severe than the damage, and you were able to fix most of it in time. However, the 9th Control Module, which monitors the life support systems of your suits, has been severely damaged in the collision and has failed. <b>You cannot win a trick with a 9-value card.</b></p>",
	},
	{
		levelNumber: 17,
		description:
			"<p>The damage on the 9th control module is even greater than originally thought, so you have to invest significantly more time in the repair. At the same time, however, you must keep an eye on your course and send a message to Earth, where your status is eagerly awaited. <b>You are still not allowed to win a trick with a 9-value card.</b></p>",
		orderCardsCount: 2,
	},
	{
		levelNumber: 18,
		description:
			"<p>You set course for Jupiter as you fly into a cloud of dust. Almost at the same moment your communication module reacts. At first it shows an amazingly good connection, but only seconds later it seems to have a total failure. <b>You are only allowed to communicate starting with the 2nd trick</b></p>",
		orderCardsCount: 5,
	},
	{
		levelNumber: 19,
		description:
			"<p>The dust cloud reveals extraordinary dimensions and the longer you are in it, the stranger your communication module reacts. It fluctuates between crystal clear and completely incomprehensible. However, the severely impaired periods become longer. <b>You may not communicate until the start of the 3rd trick.</b></p>",
		orderCardsCount: 5,
		tokens: { numberTokenCount: 1 },
	},
	{
		levelNumber: 20,
		description:
			"<p>Finally, the cloud clears and the deflections of the communication module are noticeably reduced. Before you, Jupiter presents itself in all its glory. The giant gas giant rightly bears its name. Your awe is interrupted as you notice the two damaged radar sensors. <b>Your Commander determines who receives the orders and carries out the repair.</b></p>",
		orderCardsCount: 2,
	},
	{
		levelNumber: 21,
		description:
			"<p>After the repair you will notice that the cloud has brought you too close to Jupiter. Its approx. 2.5-fold gravity already influences your course. To counteract it, you have to work in a concentrated and precise manner to get to the ideal exit point. You hardly notice the <b>reception dead spot.</b></p>",
		orderCardsCount: 5,
		tokens: { numberTokenCount: 2 },
	},
	{
		levelNumber: 22,
		description:
			"<p>When you're out of the woods, the temperature suddenly drops noticeably. All control systems sound the alarm and you immediately put on your suits. The regulation module barely adapts to the adjustment. Reroute the power supply to other modules one by one to avoid a total system failure.</p>",
		orderCardsCount: 5,
		tokens: { forwardTokenCount: 4 },
	},
	{
		levelNumber: 23,
		description:
			"<p>Most of the modules are still on emergency power while you are discussing the cause of the rapid cooling. When you pass Callisto, one of the 69 Jupiter moons, you seem to have escaped the frost field. At least the readings have relativized. Reactivate the modules on standby. <b>Before you select the Order cards, you may change the position of two Order tiles.</b></p>",
		orderCardsCount: 5,
		tokens: { numberTokenCount: 5 },
	},
	{
		levelNumber: 24,
		description:
			"<p>The unexpected incident has messed up your operations quite a bit. Everywhere there is now something to do and for a moment, each of you uncontrollably wants to begin at some point. Your Commander takes the initiative and draws up a plan. <b>In order to be able to proceed in a structured way, he distributes the individual orders</b></p>",
		orderCardsCount: 6,
	},
	{
		levelNumber: 25,
		description:
			"<p>You reach Saturn and pause to admire the grandiose spectacle of the rock tracks that continuously orbit it. It is called the ring planet for a reason. Almost apathetically, you devote yourself to the on-board analysis and sink into astonishment. Because of the <b>reception dead spot</b> you are hardly disturbed. <b>If you are playing with five, you can now use the additional rule for 5 crew members.</b> </p>",
		orderCardsCount: 6,
		tokens: { forwardTokenCount: 2 },
	},
	{
		levelNumber: 26,
		description:
			"<p>A loud bang breaks you out of the devout mood. Two pieces of rock around Saturn have torn holes into your ship's hull. The on-board analysis has immediately sealed off the affected storage area. Both stones are still stuck in the hull. You must carefully remove them without increasing the damage. <b>Two 1-value cards must win one trick each.</b></p>",
	},
	{
		levelNumber: 27,
		description:
			"<p>You notice that the tear of the hull has has left consequences. An inspection of the modules connected to the storage room shows that the flux compensator has been damaged. Although there is currently no problem, a repair is necessary in the long run if you want to return home. <b>Your commander decides who will do the repair.</b></p>",
		orderCardsCount: 3,
	},
	{
		levelNumber: 28,
		description:
			"<p>You measure an unusually high level of cosmic radiation. Seemingly unaffected, you continue your flight, only to find that your radio messages either do not arrive at all, or are very time-delayed at the receiver. It is not possible to work smoothly. <b>You may not communicate until the start of the 3rd trick.</b></p>",
		orderCardsCount: 6,
		tokens: { hasOmegaToken: true, numberTokenCount: 1 },
	},
	{
		levelNumber: 29,
		description:
			"<p>Your communication module seems to have suffered more damage than you initially thought. The repair requires a series of tests and calibrations, which you must perform together and in precise coordination. <b>At no time may a crew member have won 2 tricks more than another crew member. Communication is disrupted.</b></p>",
	},
	{
		levelNumber: 30,
		description:
			"<p>One part is done, but you postpone the rest of the repair, as you are heading straight for Uranus. Its smooth, pale blue surface makes it look almost artificial. You tear yourselves away from this fascinating sight, because not all the damage has been repaired yet. <b>You are only allowed to communicate starting from the 2nd trick.</b></p>",
		orderCardsCount: 6,
		tokens: { forwardTokenCount: 3 },
	},
	{
		levelNumber: 31,
		description:
			"<p>As you slowly move away from Uranus, you receive a message from Earth requesting the collection of metadata of the Uranus moons. Due to the disruption it's too late, so you can only see three of the 27 moons – Rosalind, Belinda and Puck. That'll have to do for now.</p>",
		orderCardsCount: 6,
		tokens: { numberTokenCount: 3 },
	},
	{
		levelNumber: 32,
		description:
			"<p>Despite the good conditions, it is now noticeable how long you have been travelling together and how all too human characteristics come to light. In order to avoid a heated confrontation, everyone delves into their work. <b>Your Commander takes over the organization and distributes the individual orders.</b></p>",
		orderCardsCount: 7,
	},
	{
		levelNumber: 33,
		description:
			'<p>We got a field assignment coming up! One of the hatches is defective and must be repaired. But leaving the ship is always a risk. <b>After everyone has looked at their hand of cards, your Commander asks everyone for their willingness. But you can only answer with "Yes" or "No". Your Commander then selects a crew member. The selected crew member must win exactly 1 trick, but not with a Rocket card.</b></p>',
	},
	{
		levelNumber: 34,
		description:
			"<p>Neptune is already in sight when your ship begins to shake. Man the stabilizers so you don't lose control. In the meantime, your Commander must realign the gravity module. <b>At no time may a crew member have won 2 tricks more than another crew member. Your Commander must win the first and last trick.</b></p>",
	},
	{
		levelNumber: 35,
		description:
			"<p>Devoutly you reach the outermost planet of our solar system: the ice giant Neptune. Its deep blue makes you shiver. As you slowly pass Neptune, you receive another message from Earth. The spacecraft Alpha 5 orbits Neptune, but has damaged sensors. Locate and repair them.</p>",
		orderCardsCount: 7,
		tokens: { forwardTokenCount: 3 },
	},
	{
		levelNumber: 36,
		description:
			"<p>You use one of the rare calm moments to find out more about each other. With all the minor and major emergencies, the responsibility on your shoulders, and the uncertainty of the outcome of your adventure, the tension has crept to the core of each individual. It's good to just sit together, talk and listen. Relieved of a burden, you then dedicate yourself to the challenges ahead. <b>Your Commander distributes the individual orders.</b></p>",
		orderCardsCount: 7,
		tokens: { numberTokenCount: 2 },
	},
	{
		levelNumber: 37,
		description:
			"<p>You reach the dwarf planet Pluto. Many years ago it would have been the 9th planet. You indulge in memories of things your fathers used to explain to you on Sundays and think about changeability. Nevertheless, the ship must be kept on course. <b>The Commander decides who takes care of it.</b></p>",
		orderCardsCount: 4,
	},
	{
		levelNumber: 38,
		description:
			"<p>You reach the heliopause, the edge of our solar system. If the calculations prove to be true, the 9th planet can't be far. An intense tingling is spreading, the hour of truth is approaching. As your instruments bounce, you almost jump off your seats. But unfortunately it is only a disruption. <b>You are only allowed to communicate starting from the 3rd trick.</b></p>",
		orderCardsCount: 8,
	},
	{
		levelNumber: 39,
		description:
			"<p>That must be it! The displayed readings of your modules can only be generated by really gigantic objects. The effects are so massive that even your <b>radio signal is interrupted</b>. Recalibrate your instruments and find out what's really behind it. </p>",
		orderCardsCount: 8,
		tokens: { forwardTokenCount: 3 },
	},
	{
		levelNumber: 40,
		description:
			"<p>You are now looking closely at the object, but you are still uncertain. What appears in front of you could also be a Pluto moon. No, that's not a moon! You have found it! The 9th planet! Boundless euphoria spreads within you and makes you forget all the hardships. The surface scan of the planet suggests a solid crust. That would mean that it is not another gas giant, but walkable. A fantastic opportunity opens up. <b>Before you start choosing the Order cards, you may place an Order tile on another order without an Order tile.</b></p>",
		orderCardsCount: 8,
		tokens: { numberTokenCount: 3 },
	},
	{
		levelNumber: 41,
		description:
			'<p>You adjust the engines and prepare for landing. Due to the completely new conditions, one of you will have to coordinate the landing. <b>After everyone has looked at their hand of cards, your Commander will ask everyone for their willingness. However, you may only answer "Yes" or "No". Your Commander then selects a person. Your mission is that this person only wins the first and last trick. Since only the thrusters are used for position correction, both tricks may not be won with Rocket cards.</b></p>',
	},
	{
		levelNumber: 42,
		description:
			"<p>The planet is extremely cold and inhospitable, but seems habitable. You notice an area that seems to elude your instruments. The closer you get to this anomaly, the more glaring the measurement errors become. What presents itself to you transcends your knowledge of science. At least you can roughly narrow down the phenomenon, because the results normalize when you move away.</p>",
		orderCardsCount: 9,
	},
	{
		levelNumber: 43,
		description:
			"<p>In the name of science, you venture closer. The laws of gravitation seem to reverse the closer you get to the anomaly and you anchor yourself to the planet's surface with vibranium hooks for safety. <b>Your Commander secures the rest of the crew and distributes the individual orders.</b> The results allow only one conclusion: You have discovered a wormhole. </p>",
		orderCardsCount: 9,
	},
	{
		levelNumber: 44,
		description:
			"<p>Until now, wormholes were at best theoretical constructs and now you are here, right in front of it. It overshadows you like a black monolith - incomprehensible, but with a enormous gravitational pull. You send a message to Earth and prepare the engines for the jump. <b>Each Rocket card must win a trick. First the 1-Rocket, then the 2, the 3 and finally the 4.</b></p>",
	},
	{
		levelNumber: 45,
		description:
			"<p>The impact is massive! You are strapped into your seats and feel like you're everywhere at the same time. Colors and shapes change, light feels like a swirling mass that behaves like an intelligent being and envelops you. You focus on your displays and try not to lose your mind.</p>",
		orderCardsCount: 9,
		tokens: { forwardTokenCount: 3 },
	},
	{
		levelNumber: 46,
		description:
			"<p>While you are faced with an incredible number of sensations, you still react instinctively to sources of danger. When all the main modules of the ship suddenly shut down during the jump, the red warning lights tear you out of your trance-like state. <b>Your mission is for the crew member to the left of the one with the pink 9 to win all the pink cards. Declare who owns the pink 9.</b> </p>",
	},
	{
		levelNumber: 47,
		description:
			"<p>You are at the end of your rope. The jump now feels like a prison in which you can no longer distinguish between reality and imagination. Your body screams that you can barely stand 10 seconds longer, but your mind questions how long 10 seconds are in actuality. You count them down – and suddenly burst out of the wormhole.</p>",
		orderCardsCount: 10,
	},
	{
		levelNumber: 48,
		description:
			"<p>You hardly have time to orient yourself. All at once it is extremely hot everywhere. The on-board analysis immediately puts the entire ship at the highest risk level. The first modules fall victim to the radical temperature fluctuation. Even in your regulated suits, you will break out into sweats within seconds. You need to activate the emergency protocol, extend the heat shields and build up a greater distance to the heat source as quickly as possible. <b>The omega order must be won in the last trick.</b></p>",
		orderCardsCount: 3,
		tokens: { hasOmegaToken: true },
	},
	{
		levelNumber: 49,
		description:
			"<p>When you come to your senses, the situation has returned to normal. You were barely able to take the necessary steps before you collapsed from exhaustion. You locate your location and can hardly believe it. You are in orbit of Venus! The wormhole is a direct link between the 9th planet and Venus, the 2nd planet. This also explains the extreme heat, because Venus is much closer to the sun than Earth. It takes a moment until it dawns on you: You can go home! Check all 10 main modules, but pay special attention to life support, drive and communication. Set course for Earth.</p>",
		orderCardsCount: 10,
		tokens: { forwardTokenCount: 3 },
	},
	{
		levelNumber: 50,
		description:
			"<p>The way back is much more complicated than expected. Some modules are permanently damaged and you fight against the immense gravitational pull of the sun. With your last reserves, you can no longer afford to make a mistake under these conditions – the way home must be precisely timed. You must first use the gravity deflection to create the jump. After that, the ship modules must be kept under control and the approach to Earth initiated. In the end, landing on Earth requires no less attention than any other maneuver. <b>Everyone looks at their hand of cards. A crew member must win the first 4 tricks. Another crew member must win the last trick. The remaining crew members must win all tricks in between. Your Commander asks everyone for his preferred task, then you decide together as a crew who should take over which position. But don't tell them anything about your hand of cards.</b></p>",
	},
];
