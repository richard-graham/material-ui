export const groups = [
  'Conditioning & Flexibility', 'Bouldering', 'Antagonists & Core', 'Hangboard/Campus', 'Endurance' 
]

export const exercises = [
  {
    id: '1',
    title: 'Run',
    time: '[ 30 minutes ]',
    description: 'Running is preferable to cycling in order to avoid bulking up the leg muscles. Go at a slow steady pace to warm-up for the first 5 minutes. Then do 5 intervals of 1 min. on at 90 to 95 percent effort followed by 1 min. slow jog to recover. Then run at a steady pace to finish. Each session make the intervals 10 seconds longer, until eventually you are doing 2 mins. on / 1 min. off x 5, then 5 mins. to warm down.',
    phase: '1',
    group: 'Conditioning & Flexibility'
  },
  {
    id: '2',
    title: 'Burpee',
    time: '[ 10 minutes ] x 8 (on 1st session). 1 min. rest. Repeat x 4.',
    description: 'Do 1 more rep per set each session (i.e., by session 10 you’ll be doing 18 reps per set).',
    phase: '1',
    group: 'Conditioning & Flexibility'
  },
  {
    id: '3',
    title: 'Flexibility',
    time: '[ 15 minutes ]',
    description: 'Hold stretches for 20 seconds, release for 10 seconds, then repeat again for 20 seconds.',
    list: ['Hamstrings', 'Thigh / quads', 'Calf', 'Groin', 'Lats', 'Shoulders', 'Chest', 'Forearms (flexors & extensors)'],
    phase: '1',
    group: 'Conditioning & Flexibility',
  },
  {
    id: '4',
    title: 'Routes',
    time: '4 x 4s',
    description: 'Select four different routes of the same grade that you can climb consecutively. The grades should be at least two notches below your onsight grade for beginner/intermediates and four below for advanced/elite. Lower off and move to the next route as quickly as possible. Do this four times with rests equal to climbing time.',
    phase: '1',
    group: 'Endurance',
  },
  {
    id: '5',
    title: 'Bouldering',
    time: '[ Volume / Easy Problems ]',
    description: 'Climb problems in ascending/descending grade order. Rest 1 minute between problems at first two levels. Rest 2 minutes between harder grades. Aim to do one more problem at each grade with each session.',
    list: ['[ Beginner / Low intermediate ] 5 x V0;  5 x V1;  5 x V2;  5 x V1;  5 x VO', '[ Intermediate ] 4 x V0; 4 x V1; 4 x V2;  4 x V3; 4 x V4; 4 x V3 ;4 x V2; 4 x V1', '[ Advanced ] 4 x V1; 4 x V2; 4 x V3; 4 x V4;  4 x V5; 4 x V4; 4 x V3; 4 x V2', '[ Elite ] 3 x V2; 3 x V3; 3 x V4; 3 x V5; 3 x V6; 3 x V7; 3 x V6; 3 x V5; 3 x V4; 3 x V3; 3 x V2'],
    phase: '1',
    group: 'Bouldering',
  },
  {
    id: '6',
    title: 'Antagonists',
    time: '',
    description: 'Do 3 sets of 20 reps of the following exercises with 2 minutes of rest between sets. Don’t go to failure (or, optional, go to failure on last set).',
    list: ['Push-ups (kneeling if required)', 'Reverse wrist curls [Use a weight that you can handle comfortably for 3 sets of 20 reps.]', 'Finger extensions (with rubber band)'],
    phase: '1',
    group: 'Antagonists & Core',
  },
  {
    id: '7',
    title: 'Core',
    time: '',
    description: '',
    list: ['Extreme plank [ 10 reps x 3 sets with 2 minutes rest ]', 'Iron cross [ 10 reps x 3 sets with 2 min. rest ] – As extreme plank but spread arms/legs wide', 'Leg paddles [ 50 reps x 3 with 2 mins. rest ]'],
    phase: '1',
    group: 'Antagonists & Core', 
  },
]