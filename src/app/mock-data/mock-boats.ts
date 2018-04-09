import { Boat, BoatStatus } from './../models/boat';

export const BOATS: Boat[] = [

    new Boat(
        '1',
        'Sharqui',
        "Operational",
        new Uint8Array([65, 66, 67, 68]),
        `Sharqui was added to the fleet in 2016.  Another of the very popular C&C designs for style, 
      comfort, and speed. Sharqui sleeps five comfortably, has an aftermarket outboard motor, and sports 
      a very generous dodger for protection on heavy weather days.`,
        27,
        'C&C',
        1981,
        100
    ),

    new Boat(
        '2',
        'Pegasus',
        "Operational",
        new Uint8Array([65, 66, 67, 68]),
        `Pegasus will be oufitted for travelling to Desolation Sound for the first time this summer. Members are 
      looking forward to a roomier more comfortable boat with generous side decks.`,
        27,
        'C&C',
        1979,
        100
    ),

    new Boat(
        '3',
        'Lightcure',
        'Operational',
        new Uint8Array([65, 66, 67, 68]),
        `She is one of our most popular boats, being a good sailor and comfortable while cruising. She sleeps 
      5 adults comfortably.She was refitted in 2005 and is powered by a remote controlled Yamaha outboard. 
      Lightcure has a BBQ, cockpit table, asymmetrical spinnaker and all the extras to be comfortable for 
      cruising.She is also rigged for use in local sailboat races.`,
        27,
        'C&C Mark 3',
        1979,
        100
    ),

    new Boat(
        '4',
        'Frankie',
        'Operational',
        new Uint8Array([65, 66, 67, 68]),
        `She is designated as a “day sailor”, and is available for use in Semiahmoo Bay.
      She is outfitted with some of the amenities for cruising and may be used occasionally for overnight trips.
      She might sleep 4 adults comfortably. Frankie has a spray dodger and is powered by a Yamaha outboard.`,
        25,
        'Cal Mark 2',
        1983,
        100
    ),

    new Boat(
        '5',
        'White Swan',
        'Operational',
        new Uint8Array([65, 66, 67, 68]),
        `She is a cruising boat, with a spray dodger, inboard diesel engine and enclosed head.
      White Swan is popular for longer trips to the local islands.She sleeps 4 adults very 
      comfortably with a private aft cabin and V - berth`,
        28,
        'MkII',
        1979,
        100
    ),

    new Boat(
        '6',
        'Peak Time',
        'Operational',
        new Uint8Array([65, 66, 67, 68]),
        `She has a spray dodger, BBQ and a comfortable cockpit.
      She has all the amenities and can be used as a cruiser or day sailing boat.
      She can sleep 4 adults.Peak Time is powered by a Yamaha outboard engine.
      She is also rigged for use in local sailboat races.`,
        27,
        'C&C Mark 5',
        1985,
        100
    ),

    new Boat(
        '7',
        'Y-Knot',
        'Operational',
        new Uint8Array([65, 66, 67, 68]),
        `A spacious fast cruiser She has a comfortable cockpit, spray dodger.
      She has all the amenities of a cruiser Large aft head/shower
      She can sleep up to 6 adults in comfort Powered by a Yanmar diesel.
      Stable wing keel design Open transom with swim grid, BBQ for sailing adventures
      She is a cruising boat, with a spray dodger, inboard diesel engine and enclosed head.
      White Swan is popular for longer trips to the local islands. She sleeps 4 adults very 
      comfortably with a private aft cabin and V-berth
      `,
        30,
        'Cruiser',
        1979,
        100
    ),

];