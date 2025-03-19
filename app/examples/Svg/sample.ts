export const svgXmlData = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <!-- Gradients for various elements -->
    <linearGradient id="volumeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(0,150,136,0.8);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(0,150,136,0.2);stop-opacity:1" />
    </linearGradient>
    <linearGradient id="positiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(76,175,80,0.6);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(76,175,80,0.1);stop-opacity:1" />
    </linearGradient>
    <linearGradient id="negativeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(244,67,54,0.6);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(244,67,54,0.1);stop-opacity:1" />
    </linearGradient>
    
  </defs>

  <!-- Background & Chart Area -->
  <rect width="1200" height="800" fill="#f5f5f5" />
  <rect x="80" y="50" width="1040" height="650" fill="white" rx="8" ry="8" />

  <!-- Additional path with odd-numbered stroke-dasharray -->
  <path d="M 100 110 L 1100 110" 
        stroke="#673ab7" 
        stroke-width="6" 
        fill="none"
        stroke-dasharray="20,8,12,5,3" />

  <!-- Chart Grid -->
  <g stroke="#e0e0e0" stroke-width="1">
    <!-- Horizontal grid lines -->
    <line x1="100" y1="150" x2="1100" y2="150" />
    <line x1="100" y1="250" x2="1100" y2="250" />
    <line x1="100" y1="350" x2="1100" y2="350" />
    <line x1="100" y1="450" x2="1100" y2="450" />
    <line x1="100" y1="550" x2="1100" y2="550" />
    
    <!-- Vertical grid lines -->
    <line x1="200" y1="100" x2="200" y2="650" />
    <line x1="300" y1="100" x2="300" y2="650" />
    <line x1="400" y1="100" x2="400" y2="650" />
    <line x1="500" y1="100" x2="500" y2="650" />
    <line x1="600" y1="100" x2="600" y2="650" />
    <line x1="700" y1="100" x2="700" y2="650" />
    <line x1="800" y1="100" x2="800" y2="650" />
    <line x1="900" y1="100" x2="900" y2="650" />
    <line x1="1000" y1="100" x2="1000" y2="650" />
  </g>

  <!-- Volume Bars -->
  <g>
    <rect x="130" y="600" width="20" height="50" fill="url(#volumeGradient)" />
    <rect x="160" y="580" width="20" height="70" fill="url(#volumeGradient)" />
    <rect x="190" y="610" width="20" height="40" fill="url(#volumeGradient)" />
    <rect x="220" y="590" width="20" height="60" fill="url(#volumeGradient)" />
    <rect x="250" y="570" width="20" height="80" fill="url(#volumeGradient)" />
    <rect x="280" y="600" width="20" height="50" fill="url(#negativeGradient)" />
    <rect x="310" y="620" width="20" height="30" fill="url(#negativeGradient)" />
    <rect x="340" y="605" width="20" height="45" fill="url(#volumeGradient)" />
    <rect x="370" y="590" width="20" height="60" fill="url(#volumeGradient)" />
    <rect x="400" y="580" width="20" height="70" fill="url(#volumeGradient)" />
    <rect x="430" y="595" width="20" height="55" fill="url(#negativeGradient)" />
    <rect x="460" y="615" width="20" height="35" fill="url(#negativeGradient)" />
    <rect x="490" y="605" width="20" height="45" fill="url(#negativeGradient)" />
    <rect x="520" y="585" width="20" height="65" fill="url(#volumeGradient)" />
    <rect x="550" y="575" width="20" height="75" fill="url(#volumeGradient)" />
    <rect x="580" y="560" width="20" height="90" fill="url(#volumeGradient)" />
    <rect x="610" y="550" width="20" height="100" fill="url(#volumeGradient)" />
    <rect x="640" y="570" width="20" height="80" fill="url(#volumeGradient)" />
    <rect x="670" y="590" width="20" height="60" fill="url(#volumeGradient)" />
    <rect x="700" y="610" width="20" height="40" fill="url(#negativeGradient)" />
    <rect x="730" y="620" width="20" height="30" fill="url(#negativeGradient)" />
    <rect x="760" y="615" width="20" height="35" fill="url(#negativeGradient)" />
    <rect x="790" y="605" width="20" height="45" fill="url(#volumeGradient)" />
    <rect x="820" y="595" width="20" height="55" fill="url(#volumeGradient)" />
    <rect x="850" y="575" width="20" height="75" fill="url(#volumeGradient)" />
    <rect x="880" y="565" width="20" height="85" fill="url(#volumeGradient)" />
    <rect x="910" y="580" width="20" height="70" fill="url(#volumeGradient)" />
    <rect x="940" y="600" width="20" height="50" fill="url(#volumeGradient)" />
    <rect x="970" y="610" width="20" height="40" fill="url(#volumeGradient)" />
    <rect x="1000" y="590" width="20" height="60" fill="url(#volumeGradient)" />
    <rect x="1030" y="570" width="20" height="80" fill="url(#volumeGradient)" />
    <rect x="1060" y="590" width="20" height="60" fill="url(#volumeGradient)" />
  </g>

  <!-- Main Price Line Chart -->
  <path d="M 120 400 
         L 150 380 
         L 180 390 
         L 210 370 
         L 240 350 
         L 270 360 
         L 300 370 
         L 330 350 
         L 360 340 
         L 390 320 
         L 420 330 
         L 450 350 
         L 480 340 
         L 510 310 
         L 540 290 
         L 570 270 
         L 600 250 
         L 630 230 
         L 660 250 
         L 690 270 
         L 720 290 
         L 750 300 
         L 780 280 
         L 810 270 
         L 840 240 
         L 870 220 
         L 900 210 
         L 930 230 
         L 960 250 
         L 990 240 
         L 1020 220 
         L 1050 200 
         L 1080 210" 
         stroke="#3f51b5" 
         stroke-width="3" 
         fill="none" />

  <!-- Area under the price line -->
  <path d="M 120 400 
         L 150 380 
         L 180 390 
         L 210 370 
         L 240 350 
         L 270 360 
         L 300 370 
         L 330 350 
         L 360 340 
         L 390 320 
         L 420 330 
         L 450 350 
         L 480 340 
         L 510 310 
         L 540 290 
         L 570 270 
         L 600 250 
         L 630 230 
         L 660 250 
         L 690 270 
         L 720 290 
         L 750 300 
         L 780 280 
         L 810 270 
         L 840 240 
         L 870 220 
         L 900 210 
         L 930 230 
         L 960 250 
         L 990 240 
         L 1020 220 
         L 1050 200 
         L 1080 210
         L 1080 650
         L 120 650
         Z" 
         fill="rgba(63,81,181,0.1)" />

  <!-- 20-day Moving Average -->
  <path d="M 120 420 
         L 150 410 
         L 180 400 
         L 210 390 
         L 240 380 
         L 270 370 
         L 300 370 
         L 330 360 
         L 360 350 
         L 390 340 
         L 420 330 
         L 450 320 
         L 480 310 
         L 510 300 
         L 540 290 
         L 570 280 
         L 600 270 
         L 630 260 
         L 660 260 
         L 690 260 
         L 720 270 
         L 750 280 
         L 780 280 
         L 810 270 
         L 840 260 
         L 870 240 
         L 900 230 
         L 930 230 
         L 960 240 
         L 990 240 
         L 1020 230 
         L 1050 220 
         L 1080 220" 
         stroke="#ff9800" 
         stroke-width="2" 
         stroke-dasharray="5,3"
         fill="none" />

  <!-- 50-day Moving Average -->
  <path d="M 120 440 
         L 150 430 
         L 180 420 
         L 210 410 
         L 240 405 
         L 270 400 
         L 300 395 
         L 330 390 
         L 360 385 
         L 390 380 
         L 420 375 
         L 450 370 
         L 480 365 
         L 510 360 
         L 540 350 
         L 570 340 
         L 600 330 
         L 630 320 
         L 660 315 
         L 690 310 
         L 720 305 
         L 750 300 
         L 780 300 
         L 810 295 
         L 840 290 
         L 870 285 
         L 900 280 
         L 930 275 
         L 960 270 
         L 990 265 
         L 1020 260 
         L 1050 255 
         L 1080 250" 
         stroke="#9c27b0" 
         stroke-width="2" 
         stroke-dasharray="10,4"
         fill="none" />

  <!-- Candlesticks - green for up days, red for down days -->
  <!-- Format: x, open y, close y, width, wick top, wick bottom -->
  <!-- Green candles -->
  <line x1="140" y1="380" x2="140" y2="400" stroke="#4caf50" stroke-width="1"/>
  <rect x="135" y="380" width="10" height="20" fill="#4caf50"/>
  
  <line x1="200" y1="370" x2="200" y2="395" stroke="#4caf50" stroke-width="1"/>
  <rect x="195" y="370" width="10" height="25" fill="#4caf50"/>
  
  <line x1="260" y1="350" x2="260" y2="375" stroke="#4caf50" stroke-width="1"/>
  <rect x="255" y="350" width="10" height="25" fill="#4caf50"/>
  
  <line x1="320" y1="340" x2="320" y2="355" stroke="#4caf50" stroke-width="1"/>
  <rect x="315" y="340" width="10" height="15" fill="#4caf50"/>
  
  <line x1="380" y1="320" x2="380" y2="345" stroke="#4caf50" stroke-width="1"/>
  <rect x="375" y="320" width="10" height="25" fill="#4caf50"/>
  
  <line x1="500" y1="290" x2="500" y2="315" stroke="#4caf50" stroke-width="1"/>
  <rect x="495" y="290" width="10" height="25" fill="#4caf50"/>
  
  <line x1="560" y1="270" x2="560" y2="295" stroke="#4caf50" stroke-width="1"/>
  <rect x="555" y="270" width="10" height="25" fill="#4caf50"/>
  
  <line x1="620" y1="230" x2="620" y2="255" stroke="#4caf50" stroke-width="1"/>
  <rect x="615" y="230" width="10" height="25" fill="#4caf50"/>
  
  <line x1="740" y1="290" x2="740" y2="310" stroke="#4caf50" stroke-width="1"/>
  <rect x="735" y="290" width="10" height="20" fill="#4caf50"/>
  
  <line x1="800" y1="270" x2="800" y2="285" stroke="#4caf50" stroke-width="1"/>
  <rect x="795" y="270" width="10" height="15" fill="#4caf50"/>
  
  <line x1="860" y1="220" x2="860" y2="245" stroke="#4caf50" stroke-width="1"/>
  <rect x="855" y="220" width="10" height="25" fill="#4caf50"/>
  
  <line x1="980" y1="240" x2="980" y2="255" stroke="#4caf50" stroke-width="1"/>
  <rect x="975" y="240" width="10" height="15" fill="#4caf50"/>
  
  <line x1="1040" y1="200" x2="1040" y2="225" stroke="#4caf50" stroke-width="1"/>
  <rect x="1035" y="200" width="10" height="25" fill="#4caf50"/>
  
  <!-- Red candles -->
  <line x1="170" y1="370" x2="170" y2="395" stroke="#f44336" stroke-width="1"/>
  <rect x="165" y="370" width="10" height="25" fill="#f44336"/>
  
  <line x1="230" y1="350" x2="230" y2="375" stroke="#f44336" stroke-width="1"/>
  <rect x="225" y="350" width="10" height="25" fill="#f44336"/>
  
  <line x1="290" y1="360" x2="290" y2="375" stroke="#f44336" stroke-width="1"/>
  <rect x="285" y="360" width="10" height="15" fill="#f44336"/>
  
  <line x1="350" y1="340" x2="350" y2="355" stroke="#f44336" stroke-width="1"/>
  <rect x="345" y="340" width="10" height="15" fill="#f44336"/>
  
  <line x1="410" y1="320" x2="410" y2="335" stroke="#f44336" stroke-width="1"/>
  <rect x="405" y="320" width="10" height="15" fill="#f44336"/>
  
  <line x1="470" y1="340" x2="470" y2="355" stroke="#f44336" stroke-width="1"/>
  <rect x="465" y="340" width="10" height="15" fill="#f44336"/>
  
  <line x1="530" y1="290" x2="530" y2="315" stroke="#f44336" stroke-width="1"/>
  <rect x="525" y="290" width="10" height="25" fill="#f44336"/>
  
  <line x1="590" y1="250" x2="590" y2="275" stroke="#f44336" stroke-width="1"/>
  <rect x="585" y="250" width="10" height="25" fill="#f44336"/>
  
  <line x1="650" y1="240" x2="650" y2="255" stroke="#f44336" stroke-width="1"/>
  <rect x="645" y="240" width="10" height="15" fill="#f44336"/>
  
  <line x1="710" y1="270" x2="710" y2="295" stroke="#f44336" stroke-width="1"/>
  <rect x="705" y="270" width="10" height="25" fill="#f44336"/>
  
  <line x1="770" y1="280" x2="770" y2="305" stroke="#f44336" stroke-width="1"/>
  <rect x="765" y="280" width="10" height="25" fill="#f44336"/>
  
  <line x1="830" y1="240" x2="830" y2="275" stroke="#f44336" stroke-width="1"/>
  <rect x="825" y="240" width="10" height="35" fill="#f44336"/>
  
  <line x1="890" y1="210" x2="890" y2="235" stroke="#f44336" stroke-width="1"/>
  <rect x="885" y="210" width="10" height="25" fill="#f44336"/>
  
  <line x1="950" y1="230" x2="950" y2="255" stroke="#f44336" stroke-width="1"/>
  <rect x="945" y="230" width="10" height="25" fill="#f44336"/>
  
  <line x1="1010" y1="220" x2="1010" y2="245" stroke="#f44336" stroke-width="1"/>
  <rect x="1005" y="220" width="10" height="25" fill="#f44336"/>
  
  <line x1="1070" y1="200" x2="1070" y2="215" stroke="#f44336" stroke-width="1"/>
  <rect x="1065" y="200" width="10" height="15" fill="#f44336"/>

  <!-- RSI Indicator -->
  <g transform="translate(0, 650)">
    <rect x="100" y="0" width="1000" height="100" fill="white" stroke="#e0e0e0" />
    <text x="110" y="20" fill="#212121" font-family="Arial" font-size="12">RSI</text>
    <line x1="100" y1="50" x2="1100" y2="50" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="2,2" />
    <line x1="100" y1="30" x2="1100" y2="30" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="2,2" />
    <line x1="100" y1="70" x2="1100" y2="70" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="2,2" />
    <path d="M 120 50 
           L 150 55 
           L 180 60 
           L 210 65 
           L 240 70 
           L 270 75 
           L 300 70 
           L 330 65 
           L 360 60 
           L 390 55 
           L 420 50 
           L 450 45 
           L 480 40 
           L 510 35 
           L 540 30 
           L 570 25 
           L 600 30 
           L 630 35 
           L 660 40 
           L 690 45 
           L 720 50 
           L 750 55 
           L 780 60 
           L 810 65 
           L 840 70 
           L 870 65 
           L 900 60 
           L 930 55 
           L 960 50 
           L 990 45 
           L 1020 40 
           L 1050 35 
           L 1080 40" 
           stroke="#9c27b0" 
           stroke-width="2" 
           fill="none" />
  </g>

  <!-- Chart Labels and Values -->
  <g>
    <!-- Y-axis price labels -->
    <text x="70" y="150" fill="#616161" font-family="Arial" font-size="12" text-anchor="end">3,500</text>
    <text x="70" y="250" fill="#616161" font-family="Arial" font-size="12" text-anchor="end">3,000</text>
    <text x="70" y="350" fill="#616161" font-family="Arial" font-size="12" text-anchor="end">2,500</text>
    <text x="70" y="450" fill="#616161" font-family="Arial" font-size="12" text-anchor="end">2,000</text>
    <text x="70" y="550" fill="#616161" font-family="Arial" font-size="12" text-anchor="end">1,500</text>
    
    <!-- X-axis date labels -->
    <text x="200" y="670" fill="#616161" font-family="Arial" font-size="12" text-anchor="middle">Mar</text>
    <text x="400" y="670" fill="#616161" font-family="Arial" font-size="12" text-anchor="middle">Apr</text>
    <text x="600" y="670" fill="#616161" font-family="Arial" font-size="12" text-anchor="middle">May</text>
    <text x="800" y="670" fill="#616161" font-family="Arial" font-size="12" text-anchor="middle">Jun</text>
    <text x="1000" y="670" fill="#616161" font-family="Arial" font-size="12" text-anchor="middle">Jul</text>
    
    <!-- RSI labels -->
    <text x="70" y="680" fill="#616161" font-family="Arial" font-size="12" text-anchor="end">30</text>
    <text x="70" y="700" fill="#616161" font-family="Arial" font-size="12" text-anchor="end">50</text>
    <text x="70" y="720" fill="#616161" font-family="Arial" font-size="12" text-anchor="end">70</text>
  </g>

  <!-- Chart Title and Legends -->
  <text x="120" y="80" fill="#212121" font-family="Arial" font-size="20" font-weight="bold">NASDAQ Composite</text>
  
  <g transform="translate(700, 80)">
    <line x1="0" y1="0" x2="20" y2="0" stroke="#3f51b5" stroke-width="3" />
    <text x="30" y="5" fill="#616161" font-family="Arial" font-size="14">Price</text>
    
    <line x1="100" y1="0" x2="120" y2="0" stroke="#ff9800" stroke-width="2" stroke-dasharray="5,3" />
    <text x="130" y="5" fill="#616161" font-family="Arial" font-size="14">20-MA</text>
    
    <line x1="200" y1="0" x2="220" y2="0" stroke="#9c27b0" stroke-width="2" stroke-dasharray="10,4" />
    <text x="230" y="5" fill="#616161" font-family="Arial" font-size="14">50-MA</text>
    
    <rect x="300" y="-7" width="10" height="14" fill="#4caf50" />
    <text x="320" y="5" fill="#616161" font-family="Arial" font-size="14">Up</text>
    
    <rect x="370" y="-7" width="10" height="14" fill="#f44336" />
    <text x="390" y="5" fill="#616161" font-family="Arial" font-size="14">Down</text>
  </g>

  <!-- Current Price Indicator -->
  <g transform="translate(1080, 210)">
    <rect x="0" y="-25" width="60" height="26" fill="#3f51b5" rx="13" ry="13" />
    <text x="30" y="-7" fill="white" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">3,257</text>
    <line x1="0" y1="0" x2="-20" y2="0" stroke="#3f51b5" stroke-width="2" />
  </g>
</svg>
`;