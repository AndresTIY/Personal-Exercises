## Body Fat Calculator
This morning I started looking into how to determine my body fat percentage. There are various tools out there but I became interested in a caliper. Since I'm living the frugal life, a $10 caliper was out of my price range but with a tape measure, scale, and some calculations, I can figure this out on my own. Then I thought, what if I just make this a coding challenge?

### How to determine Body Fat Percentage
I'm using [A Livestrong Article](http://www.livestrong.com/article/90931-measure-body-fat-percentages-calipers/) to figure this out

#### Step 1
Using a tape measure..
- **Male:** Measure waist at the navel
- **Female:** Measure hips and forearm at the fullest point and wrist at the thinnest

#### Step 2
Weight yourself in pounds with a scale. Do this when you wake up so that your weight will be at its lowest level of the day

#### Step 3
Figure out your Lean Body Weight (LBW)
**Male**
- LBW = (1.082 * Total Weight) - (4.15 * Waist Measurement) + 94.42
- Example: If Weight = 155lbs and Waist = 35 inches, then (1.082 * 155) - (4.15 * 35) + 94.42 = 117lbs
**Female**
- LBW = (0.732 * Total Weight) - (0.157 * Waist Measurement) - (0.249 * Hip Measurement) + (0.434 * Forearm Measurement) + (Wrist Measurement/3.14) + 8.987
- Example: Weight = 143, Waist = 28in, Hip = 39in, Forearm = 10in, Wrist = 6.5
  - (0.732 * 143) - (0.157 * 28) – (0.249 * 39) + (0.434 * 10) + (6.5 / 3.14) + 8.987 = 106lbs

#### Step 4
Convert your LBW to Body Fat %
- (Body Weight - LBW)/(Body Weight) = Number * 100 = Percentage
- Example: (155-116)/155 = .2516 * 100 = 25.16
  - Body Fat % = 25.16%

### Calculator
- How many inputs do we need?
  - Male, 2: Body Weight (BW), Waist Measurement (WM)
  - Female, 5: BW, WM, Hip Measurement(HM), Forearm Measurement (FM), Wrist Measurement (WrM)


### Results
- I have 20% Body Fat :)
