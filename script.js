 <script>
        // Enhanced Indian stocks data with large, mid and small caps and additional details
        const indianStocks = [
            // Large Cap Stocks
            { symbol: "RELIANCE", name: "Reliance Industries Ltd", price: 2856.15, change: 43.25, changePercent: 1.54, marketCap: "Large Cap", marketCapValue: 1930000, pe: 28.5, volume: 12000000, tradedValue: 34200, todayHigh: 2870, todayLow: 2810, _52High: 3000, _52Low: 2200, roe: 9.2, dividend: 0.35, faceValue: 10, debtEquity: 0.4, revenueLast5: [900000, 850000, 800000, 750000, 700000], profitLast5: [60000, 55000, 50000, 45000, 40000], shareHolding: {promoter: 50, fii: 24, dii: 15, public: 11}, sector: "Oil & Gas" },
            { symbol: "TCS", name: "Tata Consultancy Services Ltd", price: 3740.90, change: 34.10, changePercent: 0.92, marketCap: "Large Cap", marketCapValue: 1350000, pe: 32.1, volume: 2500000, tradedValue: 9350, todayHigh: 3760, todayLow: 3700, _52High: 3800, _52Low: 3000, roe: 45.6, dividend: 1.2, faceValue: 1, debtEquity: 0.1, revenueLast5: [200000, 190000, 180000, 170000, 160000], profitLast5: [40000, 38000, 36000, 34000, 32000], shareHolding: {promoter: 72, fii: 13, dii: 10, public: 5}, sector: "IT" },
            { symbol: "HDFCBANK", name: "HDFC Bank Ltd", price: 1568.25, change: -7.10, changePercent: -0.45, marketCap: "Large Cap", marketCapValue: 1190000, pe: 18.4, volume: 15000000, tradedValue: 23500, todayHigh: 1580, todayLow: 1550, _52High: 1700, _52Low: 1400, roe: 16.8, dividend: 1.1, faceValue: 1, debtEquity: 1.6, revenueLast5: [150000, 140000, 130000, 120000, 110000], profitLast5: [45000, 42000, 39000, 36000, 33000], shareHolding: {promoter: 0, fii: 55, dii: 25, public: 20}, sector: "Banking" },
            { symbol: "INFY", name: "Infosys Ltd", price: 1425.60, change: 17.65, changePercent: 1.25, marketCap: "Large Cap", marketCapValue: 590000, pe: 24.8, volume: 8000000, tradedValue: 11400, todayHigh: 1440, todayLow: 1400, _52High: 1600, _52Low: 1200, roe: 30.5, dividend: 2.4, faceValue: 5, debtEquity: 0.05, revenueLast5: [130000, 120000, 110000, 100000, 90000], profitLast5: [25000, 24000, 23000, 22000, 21000], shareHolding: {promoter: 15, fii: 35, dii: 20, public: 30}, sector: "IT" },
            { symbol: "ITC", name: "ITC Ltd", price: 430.75, change: 2.75, changePercent: 0.64, marketCap: "Large Cap", marketCapValue: 537000, pe: 26.2, volume: 18000000, tradedValue: 7750, todayHigh: 435, todayLow: 425, _52High: 450, _52Low: 350, roe: 28.4, dividend: 2.8, faceValue: 1, debtEquity: 0.01, revenueLast5: [70000, 65000, 60000, 55000, 50000], profitLast5: [20000, 19000, 18000, 17000, 16000], shareHolding: {promoter: 0, fii: 43, dii: 35, public: 22}, sector: "FMCG" },
            { symbol: "HINDUNILVR", name: "Hindustan Unilever Ltd", price: 2490.50, change: 15.25, changePercent: 0.62, marketCap: "Large Cap", marketCapValue: 585000, pe: 58.3, volume: 2000000, tradedValue: 4980, todayHigh: 2500, todayLow: 2450, _52High: 2600, _52Low: 2200, roe: 20.1, dividend: 1.6, faceValue: 1, debtEquity: 0.03, revenueLast5: [50000, 48000, 46000, 44000, 42000], profitLast5: [10000, 9500, 9000, 8500, 8000], shareHolding: {promoter: 62, fii: 14, dii: 12, public: 12}, sector: "FMCG" },
            { symbol: "ICICIBANK", name: "ICICI Bank Ltd", price: 1025.75, change: 12.40, changePercent: 1.22, marketCap: "Large Cap", marketCapValue: 720000, pe: 17.9, volume: 12000000, tradedValue: 12300, todayHigh: 1035, todayLow: 1010, _52High: 1100, _52Low: 850, roe: 17.5, dividend: 0.8, faceValue: 2, debtEquity: 1.7, revenueLast5: [130000, 120000, 110000, 100000, 90000], profitLast5: [34000, 31000, 28000, 25000, 22000], shareHolding: {promoter: 0, fii: 45, dii: 30, public: 25}, sector: "Banking" },
            { symbol: "SBIN", name: "State Bank of India", price: 625.30, change: 8.75, changePercent: 1.42, marketCap: "Large Cap", marketCapValue: 558000, pe: 10.2, volume: 25000000, tradedValue: 15600, todayHigh: 630, todayLow: 615, _52High: 650, _52Low: 500, roe: 18.2, dividend: 1.8, faceValue: 1, debtEquity: 1.5, revenueLast5: [400000, 380000, 360000, 340000, 320000], profitLast5: [50000, 45000, 40000, 35000, 30000], shareHolding: {promoter: 57, fii: 11, dii: 25, public: 7}, sector: "Banking" },
            { symbol: "BHARTIARTL", name: "Bharti Airtel Ltd", price: 890.45, change: 5.60, changePercent: 0.63, marketCap: "Large Cap", marketCapValue: 510000, pe: 68.4, volume: 10000000, tradedValue: 8900, todayHigh: 900, todayLow: 880, _52High: 950, _52Low: 700, roe: 8.9, dividend: 0.45, faceValue: 5, debtEquity: 2.1, revenueLast5: [140000, 130000, 120000, 110000, 100000], profitLast5: [8000, 7000, 6000, 5000, 4000], shareHolding: {promoter: 55, fii: 25, dii: 15, public: 5}, sector: "Telecom" },
            { symbol: "BAJFINANCE", name: "Bajaj Finance Ltd", price: 7250.80, change: -25.50, changePercent: -0.35, marketCap: "Large Cap", marketCapValue: 450000, pe: 38.7, volume: 1500000, tradedValue: 10800, todayHigh: 7300, todayLow: 7200, _52High: 8000, _52Low: 6000, roe: 22.4, dividend: 0.5, faceValue: 2, debtEquity: 3.8, revenueLast5: [40000, 35000, 30000, 25000, 20000], profitLast5: [12000, 11000, 10000, 9000, 8000], shareHolding: {promoter: 55, fii: 20, dii: 15, public: 10}, sector: "NBFC" },
            // Mid Cap Stocks
            { symbol: "ADANIPORTS", name: "Adani Ports & SEZ Ltd", price: 845.60, change: 12.35, changePercent: 1.48, marketCap: "Mid Cap", marketCapValue: 182000, pe: 35.2, volume: 5000000, tradedValue: 4220, todayHigh: 850, todayLow: 830, _52High: 900, _52Low: 700, roe: 16.5, dividend: 0.6, faceValue: 2, debtEquity: 1.2, revenueLast5: [20000, 18000, 16000, 14000, 12000], profitLast5: [5000, 4500, 4000, 3500, 3000], shareHolding: {promoter: 66, fii: 15, dii: 10, public: 9}, sector: "Infrastructure" },
            { symbol: "INDUSINDBK", name: "IndusInd Bank Ltd", price: 1425.90, change: 8.25, changePercent: 0.58, marketCap: "Mid Cap", marketCapValue: 110000, pe: 12.8, volume: 4000000, tradedValue: 5700, todayHigh: 1440, todayLow: 1400, _52High: 1500, _52Low: 1100, roe: 14.2, dividend: 0.6, faceValue: 10, debtEquity: 1.8, revenueLast5: [30000, 28000, 26000, 24000, 22000], profitLast5: [7000, 6500, 6000, 5500, 5000], shareHolding: {promoter: 17, fii: 42, dii: 20, public: 21}, sector: "Banking" },
            { symbol: "DRREDDY", name: "Dr. Reddy's Laboratories Ltd", price: 5620.75, change: 45.80, changePercent: 0.82, marketCap: "Mid Cap", marketCapValue: 93000, pe: 20.5, volume: 500000, tradedValue: 2810, todayHigh: 5650, todayLow: 5550, _52High: 6000, _52Low: 4500, roe: 18.9, dividend: 0.7, faceValue: 5, debtEquity: 0.2, revenueLast5: [25000, 23000, 21000, 19000, 17000], profitLast5: [4500, 4200, 3900, 3600, 3300], shareHolding: {promoter: 27, fii: 28, dii: 20, public: 25}, sector: "Pharma" },
            { symbol: "DIVISLAB", name: "Divi's Laboratories Ltd", price: 3825.50, change: -32.40, changePercent: -0.84, marketCap: "Mid Cap", marketCapValue: 101000, pe: 48.2, volume: 600000, tradedValue: 2290, todayHigh: 3850, todayLow: 3800, _52High: 4000, _52Low: 3200, roe: 15.6, dividend: 0.8, faceValue: 2, debtEquity: 0.01, revenueLast5: [8000, 7500, 7000, 6500, 6000], profitLast5: [2500, 2300, 2100, 1900, 1700], shareHolding: {promoter: 52, fii: 16, dii: 15, public: 17}, sector: "Pharma" },
            { symbol: "HAVELLS", name: "Havells India Ltd", price: 1325.80, change: 10.25, changePercent: 0.78, marketCap: "Mid Cap", marketCapValue: 83000, pe: 70.4, volume: 1000000, tradedValue: 1320, todayHigh: 1340, todayLow: 1300, _52High: 1400, _52Low: 1100, roe: 17.2, dividend: 0.6, faceValue: 1, debtEquity: 0.1, revenueLast5: [17000, 16000, 15000, 14000, 13000], profitLast5: [1200, 1100, 1000, 900, 800], shareHolding: {promoter: 60, fii: 24, dii: 10, public: 6}, sector: "Consumer Durables" },
            { symbol: "BERGEPAINT", name: "Berger Paints India Ltd", price: 645.30, change: 4.75, changePercent: 0.74, marketCap: "Mid Cap", marketCapValue: 75000, pe: 55.8, volume: 2000000, tradedValue: 1290, todayHigh: 650, todayLow: 640, _52High: 700, _52Low: 500, roe: 22.5, dividend: 0.5, faceValue: 1, debtEquity: 0.2, revenueLast5: [10000, 9500, 9000, 8500, 8000], profitLast5: [900, 850, 800, 750, 700], shareHolding: {promoter: 75, fii: 11, dii: 8, public: 6}, sector: "Paints" },
            { symbol: "DABUR", name: "Dabur India Ltd", price: 545.60, change: -2.30, changePercent: -0.42, marketCap: "Mid Cap", marketCapValue: 97000, pe: 52.3, volume: 1500000, tradedValue: 820, todayHigh: 550, todayLow: 540, _52High: 600, _52Low: 500, roe: 19.8, dividend: 1.0, faceValue: 1, debtEquity: 0.1, revenueLast5: [12000, 11500, 11000, 10500, 10000], profitLast5: [1700, 1600, 1500, 1400, 1300], shareHolding: {promoter: 67, fii: 20, dii: 8, public: 5}, sector: "FMCG" },
            { symbol: "GODREJCP", name: "Godrej Consumer Products Ltd", price: 1025.40, change: 8.90, changePercent: 0.88, marketCap: "Mid Cap", marketCapValue: 105000, pe: 58.9, volume: 1200000, tradedValue: 1230, todayHigh: 1035, todayLow: 1010, _52High: 1100, _52Low: 900, roe: 12.4, dividend: 0.0, faceValue: 1, debtEquity: 0.3, revenueLast5: [13000, 12500, 12000, 11500, 11000], profitLast5: [1800, 1700, 1600, 1500, 1400], shareHolding: {promoter: 63, fii: 23, dii: 8, public: 6}, sector: "FMCG" },
            { symbol: "MOTHERSON", name: "Samvardhana Motherson International Ltd", price: 95.75, change: 1.25, changePercent: 1.32, marketCap: "Mid Cap", marketCapValue: 65000, pe: 38.2, volume: 20000000, tradedValue: 1910, todayHigh: 97, todayLow: 94, _52High: 100, _52Low: 70, roe: 11.5, dividend: 0.7, faceValue: 1, debtEquity: 0.6, revenueLast5: [80000, 75000, 70000, 65000, 60000], profitLast5: [2500, 2300, 2100, 1900, 1700], shareHolding: {promoter: 65, fii: 15, dii: 10, public: 10}, sector: "Auto Ancillary" },
            { symbol: "PEL", name: "Piramal Enterprises Ltd", price: 875.60, change: -5.40, changePercent: -0.61, marketCap: "Mid Cap", marketCapValue: 20000, pe: 12.5, volume: 1000000, tradedValue: 875, todayHigh: 880, todayLow: 870, _52High: 1000, _52Low: 700, roe: 5.2, dividend: 3.5, faceValue: 2, debtEquity: 2.5, revenueLast5: [15000, 14000, 13000, 12000, 11000], profitLast5: [1500, 1400, 1300, 1200, 1100], shareHolding: {promoter: 46, fii: 20, dii: 15, public: 19}, sector: "NBFC" },
            // Small Cap Stocks
            { symbol: "JUBLFOOD", name: "Jubilant FoodWorks Ltd", price: 485.25, change: 7.50, changePercent: 1.57, marketCap: "Small Cap", marketCapValue: 32000, pe: 120.5, volume: 3000000, tradedValue: 1450, todayHigh: 490, todayLow: 480, _52High: 550, _52Low: 400, roe: 18.2, dividend: 0.25, faceValue: 2, debtEquity: 0.4, revenueLast5: [5000, 4500, 4000, 3500, 3000], profitLast5: [400, 350, 300, 250, 200], shareHolding: {promoter: 42, fii: 25, dii: 20, public: 13}, sector: "Food" },
            { symbol: "DIXON", name: "Dixon Technologies India Ltd", price: 5620.80, change: 125.50, changePercent: 2.28, marketCap: "Small Cap", marketCapValue: 33000, pe: 95.2, volume: 400000, tradedValue: 2240, todayHigh: 5650, todayLow: 5500, _52High: 6000, _52Low: 4000, roe: 22.5, dividend: 0.05, faceValue: 2, debtEquity: 0.3, revenueLast5: [12000, 10000, 8000, 6000, 4000], profitLast5: [250, 200, 150, 100, 50], shareHolding: {promoter: 34, fii: 18, dii: 25, public: 23}, sector: "Electronics" },
            { symbol: "IRCTC", name: "Indian Railway Catering & Tourism Corp Ltd", price: 725.40, change: 8.25, changePercent: 1.15, marketCap: "Small Cap", marketCapValue: 58000, pe: 52.8, volume: 3000000, tradedValue: 2170, todayHigh: 730, todayLow: 720, _52High: 800, _52Low: 600, roe: 35.4, dividend: 0.5, faceValue: 2, debtEquity: 0.01, revenueLast5: [3500, 3000, 2500, 2000, 1500], profitLast5: [1000, 900, 800, 700, 600], shareHolding: {promoter: 62, fii: 8, dii: 15, public: 15}, sector: "Railways" },
            { symbol: "ALKYLAMINE", name: "Alkyl Amines Chemicals Ltd", price: 2325.75, change: -45.60, changePercent: -1.92, marketCap: "Small Cap", marketCapValue: 11900, pe: 32.5, volume: 100000, tradedValue: 232, todayHigh: 2350, todayLow: 2300, _52High: 2500, _52Low: 2000, roe: 25.6, dividend: 0.4, faceValue: 2, debtEquity: 0.1, revenueLast5: [1500, 1400, 1300, 1200, 1100], profitLast5: [300, 280, 260, 240, 220], shareHolding: {promoter: 74, fii: 3, dii: 5, public: 18}, sector: "Chemicals" },
            { symbol: "AFFLE", name: "Affle India Ltd", price: 1245.90, change: 22.75, changePercent: 1.86, marketCap: "Small Cap", marketCapValue: 16500, pe: 65.2, volume: 300000, tradedValue: 373, todayHigh: 1250, todayLow: 1220, _52High: 1300, _52Low: 1000, roe: 18.9, dividend: 0.0, faceValue: 2, debtEquity: 0.2, revenueLast5: [1400, 1200, 1000, 800, 600], profitLast5: [200, 180, 160, 140, 120], shareHolding: {promoter: 57, fii: 15, dii: 10, public: 18}, sector: "IT" },
            { symbol: "METROPOLIS", name: "Metropolis Healthcare Ltd", price: 1425.60, change: 15.40, changePercent: 1.09, marketCap: "Small Cap", marketCapValue: 7300, pe: 45.8, volume: 200000, tradedValue: 285, todayHigh: 1440, todayLow: 1400, _52High: 1500, _52Low: 1200, roe: 15.2, dividend: 0.3, faceValue: 2, debtEquity: 0.1, revenueLast5: [1200, 1100, 1000, 900, 800], profitLast5: [200, 180, 160, 140, 120], shareHolding: {promoter: 50, fii: 20, dii: 15, public: 15}, sector: "Healthcare" },
            { symbol: "APLAPOLLO", name: "APL Apollo Tubes Ltd", price: 1425.80, change: 12.50, changePercent: 0.88, marketCap: "Small Cap", marketCapValue: 39500, pe: 48.5, volume: 800000, tradedValue: 1140, todayHigh: 1440, todayLow: 1400, _52High: 1500, _52Low: 1200, roe: 22.4, dividend: 0.35, faceValue: 2, debtEquity: 0.4, revenueLast5: [16000, 14000, 12000, 10000, 8000], profitLast5: [600, 550, 500, 450, 400], shareHolding: {promoter: 30, fii: 25, dii: 20, public: 25}, sector: "Metals" },
            { symbol: "DEEPAKNTR", name: "Deepak Nitrite Ltd", price: 2250.75, change: -32.40, changePercent: -1.42, marketCap: "Small Cap", marketCapValue: 30700, pe: 35.2, volume: 400000, tradedValue: 900, todayHigh: 2280, todayLow: 2220, _52High: 2400, _52Low: 1800, roe: 25.6, dividend: 0.3, faceValue: 2, debtEquity: 0.05, revenueLast5: [8000, 7000, 6000, 5000, 4000], profitLast5: [800, 750, 700, 650, 600], shareHolding: {promoter: 45, fii: 10, dii: 15, public: 30}, sector: "Chemicals" },
            { symbol: "IIFL", name: "IIFL Finance Ltd", price: 545.60, change: 8.25, changePercent: 1.54, marketCap: "Small Cap", marketCapValue: 23000, pe: 12.8, volume: 1500000, tradedValue: 818, todayHigh: 550, todayLow: 540, _52High: 600, _52Low: 400, roe: 18.2, dividend: 0.7, faceValue: 2, debtEquity: 3.2, revenueLast5: [5000, 4500, 4000, 3500, 3000], profitLast5: [500, 450, 400, 350, 300], shareHolding: {promoter: 25, fii: 30, dii: 20, public: 25}, sector: "NBFC" },
            { symbol: "MASTEK", name: "Mastek Ltd", price: 1825.40, change: 25.60, changePercent: 1.42, marketCap: "Small Cap", marketCapValue: 5600, pe: 22.5, volume: 200000, tradedValue: 365, todayHigh: 1840, todayLow: 1800, _52High: 2000, _52Low: 1500, roe: 15.4, dividend: 1.0, faceValue: 5, debtEquity: 0.3, revenueLast5: [2500, 2200, 2000, 1800, 1600], profitLast5: [300, 280, 260, 240, 220], shareHolding: {promoter: 36, fii: 15, dii: 20, public: 29}, sector: "IT" },
            // Additional stocks for variety
            { symbol: "SUNPHARMA", name: "Sun Pharmaceutical Industries Ltd", price: 1205.30, change: 15.40, changePercent: 1.29, marketCap: "Large Cap", marketCapValue: 289000, pe: 35.8, volume: 3000000, tradedValue: 3615, todayHigh: 1215, todayLow: 1190, _52High: 1300, _52Low: 900, roe: 15.2, dividend: 0.8, faceValue: 1, debtEquity: 0.2, revenueLast5: [45000, 42000, 39000, 36000, 33000], profitLast5: [8500, 8000, 7500, 7000, 6500], shareHolding: {promoter: 54, fii: 17, dii: 20, public: 9}, sector: "Pharma" },
            { symbol: "CIPLA", name: "Cipla Ltd", price: 1050.75, change: 10.25, changePercent: 0.99, marketCap: "Mid Cap", marketCapValue: 85000, pe: 28.4, volume: 2000000, tradedValue: 2100, todayHigh: 1060, todayLow: 1040, _52High: 1100, _52Low: 850, roe: 14.5, dividend: 0.8, faceValue: 2, debtEquity: 0.1, revenueLast5: [25000, 23000, 21000, 19000, 17000], profitLast5: [3500, 3200, 2900, 2600, 2300], shareHolding: {promoter: 33, fii: 25, dii: 20, public: 22}, sector: "Pharma" },
            { symbol: "AXISBANK", name: "Axis Bank Ltd", price: 950.40, change: 5.60, changePercent: 0.59, marketCap: "Large Cap", marketCapValue: 293000, pe: 14.2, volume: 10000000, tradedValue: 9500, todayHigh: 960, todayLow: 940, _52High: 1000, _52Low: 800, roe: 16.8, dividend: 0.1, faceValue: 2, debtEquity: 1.8, revenueLast5: [100000, 95000, 90000, 85000, 80000], profitLast5: [25000, 23000, 21000, 19000, 17000], shareHolding: {promoter: 8, fii: 50, dii: 25, public: 17}, sector: "Banking" },
            { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank Ltd", price: 1750.90, change: -8.20, changePercent: -0.47, marketCap: "Large Cap", marketCapValue: 348000, pe: 25.6, volume: 4000000, tradedValue: 7000, todayHigh: 1760, todayLow: 1740, _52High: 1800, _52Low: 1500, roe: 14.2, dividend: 0.08, faceValue: 5, debtEquity: 1.5, revenueLast5: [50000, 48000, 46000, 44000, 42000], profitLast5: [15000, 14000, 13000, 12000, 11000], shareHolding: {promoter: 26, fii: 40, dii: 20, public: 14}, sector: "Banking" },
            { symbol: "ULTRACEMCO", name: "UltraTech Cement Ltd", price: 8500.50, change: 45.30, changePercent: 0.54, marketCap: "Large Cap", marketCapValue: 245000, pe: 45.2, volume: 300000, tradedValue: 2550, todayHigh: 8550, todayLow: 8450, _52High: 9000, _52Low: 7000, roe: 12.5, dividend: 0.45, faceValue: 10, debtEquity: 0.3, revenueLast5: [65000, 60000, 55000, 50000, 45000], profitLast5: [6000, 5500, 5000, 4500, 4000], shareHolding: {promoter: 60, fii: 18, dii: 15, public: 7}, sector: "Cement" },
            { symbol: "TITAN", name: "Titan Company Ltd", price: 3200.75, change: 20.40, changePercent: 0.64, marketCap: "Large Cap", marketCapValue: 284000, pe: 85.6, volume: 1500000, tradedValue: 4800, todayHigh: 3220, todayLow: 3180, _52High: 3400, _52Low: 2500, roe: 28.4, dividend: 0.3, faceValue: 1, debtEquity: 0.6, revenueLast5: [40000, 38000, 36000, 34000, 32000], profitLast5: [3500, 3200, 2900, 2600, 2300], shareHolding: {promoter: 53, fii: 20, dii: 15, public: 12}, sector: "Consumer Durables" },
            { symbol: "LT", name: "Larsen & Toubro Ltd", price: 2800.60, change: 30.50, changePercent: 1.10, marketCap: "Large Cap", marketCapValue: 385000, pe: 35.4, volume: 2500000, tradedValue: 7000, todayHigh: 2820, todayLow: 2780, _52High: 3000, _52Low: 2200, roe: 14.8, dividend: 0.8, faceValue: 2, debtEquity: 1.2, revenueLast5: [180000, 170000, 160000, 150000, 140000], profitLast5: [13000, 12000, 11000, 10000, 9000], shareHolding: {promoter: 0, fii: 25, dii: 35, public: 40}, sector: "Infrastructure" },
            { symbol: "ASIANPAINT", name: "Asian Paints Ltd", price: 2900.40, change: -15.20, changePercent: -0.52, marketCap: "Large Cap", marketCapValue: 278000, pe: 65.2, volume: 1000000, tradedValue: 2900, todayHigh: 2920, todayLow: 2880, _52High: 3100, _52Low: 2500, roe: 30.5, dividend: 1.1, faceValue: 1, debtEquity: 0.1, revenueLast5: [35000, 33000, 31000, 29000, 27000], profitLast5: [5000, 4500, 4000, 3500, 3000], shareHolding: {promoter: 52, fii: 20, dii: 15, public: 13}, sector: "Paints" },
            { symbol: "MARUTI", name: "Maruti Suzuki India Ltd", price: 10500.80, change: 80.50, changePercent: 0.77, marketCap: "Large Cap", marketCapValue: 329000, pe: 32.8, volume: 800000, tradedValue: 8400, todayHigh: 10600, todayLow: 10400, _52High: 11000, _52Low: 8500, roe: 15.6, dividend: 0.6, faceValue: 5, debtEquity: 0.05, revenueLast5: [120000, 110000, 100000, 90000, 80000], profitLast5: [10000, 9000, 8000, 7000, 6000], shareHolding: {promoter: 56, fii: 22, dii: 15, public: 7}, sector: "Automobile" },
            { symbol: "HCLTECH", name: "HCL Technologies Ltd", price: 1350.90, change: 10.40, changePercent: 0.78, marketCap: "Large Cap", marketCapValue: 366000, pe: 25.2, volume: 4000000, tradedValue: 5400, todayHigh: 1360, todayLow: 1340, _52High: 1400, _52Low: 1000, roe: 22.4, dividend: 3.5, faceValue: 2, debtEquity: 0.1, revenueLast5: [100000, 95000, 90000, 85000, 80000], profitLast5: [14000, 13000, 12000, 11000, 10000], shareHolding: {promoter: 61, fii: 19, dii: 15, public: 5}, sector: "IT" },
            // More Small Cap Stocks
            { symbol: "SUZLON", name: "Suzlon Energy Ltd", price: 18.50, change: 0.90, changePercent: 5.11, marketCap: "Small Cap", marketCapValue: 25000, pe: -15.2, volume: 50000000, tradedValue: 925, todayHigh: 19, todayLow: 17, _52High: 20, _52Low: 10, roe: -8.5, dividend: 0, faceValue: 2, debtEquity: 1.5, revenueLast5: [6000, 5500, 5000, 4500, 4000], profitLast5: [-500, -400, -300, -200, -100], shareHolding: {promoter: 14, fii: 20, dii: 15, public: 51}, sector: "Renewable Energy" },
            { symbol: "IDFCFIRSTB", name: "IDFC First Bank Ltd", price: 85.60, change: -1.20, changePercent: -1.38, marketCap: "Small Cap", marketCapValue: 60000, pe: 18.5, volume: 20000000, tradedValue: 1712, todayHigh: 87, todayLow: 84, _52High: 100, _52Low: 70, roe: 10.2, dividend: 0, faceValue: 10, debtEquity: 1.8, revenueLast5: [20000, 18000, 16000, 14000, 12000], profitLast5: [2500, 2200, 1900, 1600, 1300], shareHolding: {promoter: 40, fii: 25, dii: 20, public: 15}, sector: "Banking" },
            { symbol: "TANLA", name: "Tanla Platforms Ltd", price: 950.30, change: 15.40, changePercent: 1.65, marketCap: "Small Cap", marketCapValue: 12800, pe: 25.8, volume: 500000, tradedValue: 475, todayHigh: 960, todayLow: 940, _52High: 1000, _52Low: 700, roe: 28.4, dividend: 0.2, faceValue: 1, debtEquity: 0.1, revenueLast5: [3500, 3200, 2900, 2600, 2300], profitLast5: [500, 450, 400, 350, 300], shareHolding: {promoter: 44, fii: 15, dii: 10, public: 31}, sector: "IT" },
            { symbol: "POLYCAB", name: "Polycab India Ltd", price: 3200.75, change: 45.60, changePercent: 1.45, marketCap: "Small Cap", marketCapValue: 48000, pe: 40.2, volume: 300000, tradedValue: 960, todayHigh: 3220, todayLow: 3180, _52High: 3400, _52Low: 2500, roe: 20.5, dividend: 0.6, faceValue: 10, debtEquity: 0.2, revenueLast5: [14000, 13000, 12000, 11000, 10000], profitLast5: [1200, 1100, 1000, 900, 800], shareHolding: {promoter: 66, fii: 10, dii: 15, public: 9}, sector: "Electricals" },
            { symbol: "KEI", name: "KEI Industries Ltd", price: 1800.90, change: 25.40, changePercent: 1.43, marketCap: "Small Cap", marketCapValue: 16200, pe: 35.6, volume: 400000, tradedValue: 720, todayHigh: 1820, todayLow: 1780, _52High: 1900, _52Low: 1400, roe: 22.4, dividend: 0.15, faceValue: 2, debtEquity: 0.3, revenueLast5: [7000, 6500, 6000, 5500, 5000], profitLast5: [500, 450, 400, 350, 300], shareHolding: {promoter: 38, fii: 25, dii: 20, public: 17}, sector: "Electricals" },
            { symbol: "RVNL", name: "Rail Vikas Nigam Ltd", price: 150.60, change: 5.20, changePercent: 3.58, marketCap: "Small Cap", marketCapValue: 31400, pe: 20.5, volume: 10000000, tradedValue: 1506, todayHigh: 155, todayLow: 145, _52High: 160, _52Low: 100, roe: 18.2, dividend: 1.2, faceValue: 10, debtEquity: 0.8, revenueLast5: [20000, 18000, 16000, 14000, 12000], profitLast5: [1500, 1400, 1300, 1200, 1100], shareHolding: {promoter: 73, fii: 5, dii: 10, public: 12}, sector: "Infrastructure" },
            { symbol: "YESBANK", name: "Yes Bank Ltd", price: 20.30, change: 0.40, changePercent: 2.01, marketCap: "Small Cap", marketCapValue: 63500, pe: 15.2, volume: 50000000, tradedValue: 1015, todayHigh: 21, todayLow: 19, _52High: 25, _52Low: 15, roe: 3.5, dividend: 0, faceValue: 2, debtEquity: 2.0, revenueLast5: [25000, 22000, 20000, 18000, 16000], profitLast5: [700, 600, 500, 400, 300], shareHolding: {promoter: 0, fii: 20, dii: 30, public: 50}, sector: "Banking" },
            { symbol: "TRIDENT", name: "Trident Ltd", price: 45.80, change: -0.50, changePercent: -1.08, marketCap: "Small Cap", marketCapValue: 23300, pe: 25.8, volume: 10000000, tradedValue: 458, todayHigh: 46, todayLow: 45, _52High: 50, _52Low: 30, roe: 12.4, dividend: 0.8, faceValue: 1, debtEquity: 0.5, revenueLast5: [7000, 6500, 6000, 5500, 5000], profitLast5: [500, 450, 400, 350, 300], shareHolding: {promoter: 73, fii: 5, dii: 10, public: 12}, sector: "Textiles" },
            { symbol: "ZOMATO", name: "Zomato Ltd", price: 150.40, change: 2.30, changePercent: 1.55, marketCap: "Small Cap", marketCapValue: 132000, pe: -150.2, volume: 20000000, tradedValue: 3008, todayHigh: 152, todayLow: 148, _52High: 160, _52Low: 100, roe: -5.2, dividend: 0, faceValue: 1, debtEquity: 0.1, revenueLast5: [10000, 8000, 6000, 4000, 2000], profitLast5: [-1000, -800, -600, -400, -200], shareHolding: {promoter: 0, fii: 55, dii: 25, public: 20}, sector: "E-Commerce" },
            { symbol: "PAYTM", name: "One97 Communications Ltd", price: 450.75, change: -10.20, changePercent: -2.21, marketCap: "Small Cap", marketCapValue: 28600, pe: -25.6, volume: 5000000, tradedValue: 2250, todayHigh: 460, todayLow: 440, _52High: 900, _52Low: 400, roe: -10.5, dividend: 0, faceValue: 1, debtEquity: 0.2, revenueLast5: [8000, 7000, 6000, 5000, 4000], profitLast5: [-1500, -1200, -900, -600, -300], shareHolding: {promoter: 0, fii: 40, dii: 20, public: 40}, sector: "Fintech" }
        ];
        // Indices data
        const indices = [
            { symbol: "NIFTY", name: "Nifty 50", spot: 24300.0, change: 50.5, changePercent: 0.21, high: 24350, low: 24200, _52High: 25000, _52Low: 18000, returns5y: [20, 15, 10, -5, 25], companies: indianStocks.slice(0, 50).map(s => ({symbol: s.symbol, name: s.name, mktcap: s.marketCapValue})) },
            { symbol: "BANKNIFTY", name: "Bank Nifty", spot: 52000.0, change: -100.0, changePercent: -0.19, high: 52100, low: 51800, _52High: 53000, _52Low: 40000, returns5y: [18, 12, 8, -10, 30], companies: indianStocks.filter(s => s.sector === 'Banking').map(s => ({symbol: s.symbol, name: s.name, mktcap: s.marketCapValue})) },
            { symbol: "FINNIFTY", name: "Fin Nifty", spot: 22000.0, change: 80.0, changePercent: 0.36, high: 22100, low: 21900, _52High: 23000, _52Low: 18000, returns5y: [16, 14, 9, -8, 28], companies: indianStocks.filter(s => s.sector === 'NBFC').map(s => ({symbol: s.symbol, name: s.name, mktcap: s.marketCapValue})) },
            { symbol: "SENSEX", name: "BSE Sensex", spot: 80000.0, change: 200.0, changePercent: 0.25, high: 80200, low: 79800, _52High: 81000, _52Low: 60000, returns5y: [22, 16, 11, -3, 28], companies: indianStocks.slice(0, 30).map(s => ({symbol: s.symbol, name: s.name, mktcap: s.marketCapValue})) }
        ];
        // Top Traded Options
        let topTradedOptions = [
            { symbol: "NIFTY-25000CE", name: "Nifty 25000 Call", price: 150, change: 5, changePercent: 3.45, volume: 10000000, tradedValue: 1500, marketCap: "Derivative" },
            { symbol: "NIFTY-24000PE", name: "Nifty 24000 Put", price: 200, change: -10, changePercent: -4.76, volume: 9000000, tradedValue: 1800, marketCap: "Derivative" },
            { symbol: "BANKNIFTY-52000CE", name: "BankNifty 52000 Call", price: 300, change: 15, changePercent: 5.26, volume: 8000000, tradedValue: 2400, marketCap: "Derivative" },
            { symbol: "RELIANCE-2900CE", name: "Reliance Aug 2900 Call", price: 50, change: 2, changePercent: 4.17, volume: 7000000, tradedValue: 350, marketCap: "Derivative" },
            { symbol: "TCS-3800PE", name: "TCS Aug 3800 Put", price: 100, change: -5, changePercent: -4.76, volume: 6000000, tradedValue: 600, marketCap: "Derivative" },
            { symbol: "HDFCBANK-1600CE", name: "HDFC Bank Aug 1600 Call", price: 40, change: 3, changePercent: 8.11, volume: 5000000, tradedValue: 200, marketCap: "Derivative" },
            { symbol: "INFY-1400PE", name: "Infosys Aug 1400 Put", price: 60, change: -2, changePercent: -3.23, volume: 4000000, tradedValue: 240, marketCap: "Derivative" },
            { symbol: "SENSEX-81000CE", name: "Sensex Aug 81000 Call", price: 250, change: 10, changePercent: 4.17, volume: 3000000, tradedValue: 750, marketCap: "Derivative" }
        ];
        // Derivative Instruments (futures and options added dynamically)
        let derivInstruments = [...topTradedOptions];
        // Mutual Funds data
        const mutualFunds = [
            { name: "HDFC Equity Fund", type: "Equity", nav: 150.25, rating: 4, fundSize: 50000, aum: 100000, holdings: [{symbol: "RELIANCE", percent: 10}, {symbol: "TCS", percent: 8}, {symbol: "HDFCBANK", percent: 7}], pe: 25.5, pb: 3.2, returns5y: [12, 15, 10, 8, 14], expenseRatio: 1.2, exitLoad: 1, fundManager: "Prashant Jain", risk: "High", category: "Large Cap" },
            { name: "SBI Bluechip Fund", type: "Equity", nav: 120.5, rating: 5, fundSize: 40000, aum: 80000, holdings: [{symbol: "INFY", percent: 9}, {symbol: "ITC", percent: 6}, {symbol: "ICICIBANK", percent: 8}], pe: 22.8, pb: 3.0, returns5y: [14, 16, 12, 10, 15], expenseRatio: 1.0, exitLoad: 1, fundManager: "Sohini Andani", risk: "Moderate", category: "Large Cap" },
            { name: "Axis Midcap Fund", type: "Equity", nav: 80.75, rating: 4, fundSize: 20000, aum: 50000, holdings: [{symbol: "ADANIPORTS", percent: 12}, {symbol: "INDUSINDBK", percent: 10}, {symbol: "DRREDDY", percent: 8}], pe: 28.2, pb: 4.1, returns5y: [18, 20, 15, 12, 18], expenseRatio: 1.5, exitLoad: 1, fundManager: "Shreyash Devalkar", risk: "High", category: "Mid Cap" },
            { name: "Kotak Small Cap Fund", type: "Equity", nav: 60.4, rating: 3, fundSize: 15000, aum: 30000, holdings: [{symbol: "JUBLFOOD", percent: 15}, {symbol: "DIXON", percent: 12}, {symbol: "IRCTC", percent: 10}], pe: 35.6, pb: 5.2, returns5y: [20, 22, 18, 15, 20], expenseRatio: 1.8, exitLoad: 1, fundManager: "Pankaj Tibrewal", risk: "High", category: "Small Cap" },
            { name: "ICICI Prudential Credit Risk Fund", type: "Debt", nav: 25.3, rating: 4, fundSize: 10000, aum: 20000, holdings: [{symbol: "Government Bonds", percent: 50}, {symbol: "Corporate Debt", percent: 50}], pe: null, pb: null, returns5y: [7, 8, 6, 5, 7], expenseRatio: 0.8, exitLoad: 0.5, fundManager: "Manish Banthia", risk: "Moderate", category: "Debt" },
            { name: "HDFC Corporate Bond Fund", type: "Debt", nav: 28.1, rating: 5, fundSize: 12000, aum: 25000, holdings: [{symbol: "AAA Bonds", percent: 60}, {symbol: "Treasury Bills", percent: 40}], pe: null, pb: null, returns5y: [8, 9, 7, 6, 8], expenseRatio: 0.6, exitLoad: 0, fundManager: "Anupam Joshi", risk: "Low", category: "Debt" },
            { name: "SBI Hybrid Fund", type: "Hybrid", nav: 110.8, rating: 4, fundSize: 30000, aum: 60000, holdings: [{symbol: "SBIN", percent: 20}, {symbol: "Government Bonds", percent: 30}, {symbol: "RELIANCE", percent: 15}], pe: 20.5, pb: 2.8, returns5y: [10, 12, 9, 8, 11], expenseRatio: 1.1, exitLoad: 1, fundManager: "Dinesh Ahuja", risk: "Moderate", category: "Hybrid" },
            { name: "ICICI Balanced Advantage Fund", type: "Hybrid", nav: 95.6, rating: 4, fundSize: 25000, aum: 50000, holdings: [{symbol: "ICICIBANK", percent: 25}, {symbol: "Corporate Debt", percent: 25}, {symbol: "INFY", percent: 20}], pe: 18.9, pb: 2.5, returns5y: [11, 13, 10, 9, 12], expenseRatio: 1.0, exitLoad: 1, fundManager: "Sankaran Naren", risk: "Moderate", category: "Hybrid" },
            { name: "Nippon India Small Cap Fund", type: "Equity", nav: 70.2, rating: 4, fundSize: 18000, aum: 35000, holdings: [{symbol: "ALKYLAMINE", percent: 18}, {symbol: "AFFLE", percent: 15}, {symbol: "METROPOLIS", percent: 12}], pe: 40.1, pb: 6.0, returns5y: [22, 25, 20, 18, 22], expenseRatio: 1.6, exitLoad: 1, fundManager: "Samir Rachh", risk: "High", category: "Small Cap" },
            { name: "DSP Midcap Fund", type: "Equity", nav: 85.4, rating: 3, fundSize: 22000, aum: 45000, holdings: [{symbol: "DIVISLAB", percent: 14}, {symbol: "HAVELLS", percent: 12}, {symbol: "BERGEPAINT", percent: 10}], pe: 30.5, pb: 4.5, returns5y: [16, 18, 14, 12, 16], expenseRatio: 1.4, exitLoad: 1, fundManager: "Vinit Sambre", risk: "High", category: "Mid Cap" },
            // Additional Mutual Funds for variety
            { name: "Mirae Asset Large Cap Fund", type: "Equity", nav: 110.5, rating: 5, fundSize: 35000, aum: 70000, holdings: [{symbol: "HDFCBANK", percent: 12}, {symbol: "ICICIBANK", percent: 10}, {symbol: "RELIANCE", percent: 8}], pe: 24.2, pb: 3.5, returns5y: [15, 17, 13, 11, 16], expenseRatio: 0.9, exitLoad: 1, fundManager: "Gaurav Misra", risk: "Moderate", category: "Large Cap" },
            { name: "Parag Parikh Flexi Cap Fund", type: "Equity", nav: 50.8, rating: 5, fundSize: 30000, aum: 60000, holdings: [{symbol: "BAJFINANCE", percent: 10}, {symbol: "ZOMATO", percent: 8}, {symbol: "ITC", percent: 7}], pe: 28.5, pb: 4.0, returns5y: [20, 22, 18, 15, 20], expenseRatio: 0.7, exitLoad: 2, fundManager: "Rajeev Thakkar", risk: "High", category: "Flexi Cap" },
            { name: "UTI Nifty Index Fund", type: "Equity", nav: 140.2, rating: 4, fundSize: 10000, aum: 20000, holdings: [{symbol: "NIFTY", percent: 100}], pe: null, pb: null, returns5y: [12, 14, 10, 8, 13], expenseRatio: 0.2, exitLoad: 0, fundManager: "Sharwan Kumar Goyal", risk: "High", category: "Index" },
            { name: "Franklin India Debt Fund", type: "Debt", nav: 30.5, rating: 4, fundSize: 15000, aum: 30000, holdings: [{symbol: "Government Securities", percent: 70}, {symbol: "Corporate Bonds", percent: 30}], pe: null, pb: null, returns5y: [6, 7, 5, 4, 6], expenseRatio: 0.5, exitLoad: 0.25, fundManager: "Santosh Kamath", risk: "Low", category: "Debt" },
            { name: "Aditya Birla Sun Life Hybrid Fund", type: "Hybrid", nav: 95.3, rating: 3, fundSize: 20000, aum: 40000, holdings: [{symbol: "SBIN", percent: 15}, {symbol: "Government Bonds", percent: 40}, {symbol: "INFY", percent: 10}], pe: 22.8, pb: 3.2, returns5y: [9, 11, 8, 7, 10], expenseRatio: 1.2, exitLoad: 1, fundManager: "Mahesh Patil", risk: "Moderate", category: "Hybrid" },
            { name: "SBI Small Cap Fund", type: "Equity", nav: 120.8, rating: 4, fundSize: 25000, aum: 50000, holdings: [{symbol: "TRIDENT", percent: 12}, {symbol: "KEI", percent: 10}, {symbol: "POLYCAB", percent: 8}], pe: 35.2, pb: 5.0, returns5y: [22, 24, 20, 18, 22], expenseRatio: 1.5, exitLoad: 1, fundManager: "R. Srinivasan", risk: "High", category: "Small Cap" },
            { name: "HDFC Mid-Cap Opportunities Fund", type: "Equity", nav: 100.5, rating: 4, fundSize: 40000, aum: 80000, holdings: [{symbol: "INDUSINDBK", percent: 12}, {symbol: "APLAPOLLO", percent: 10}, {symbol: "GODREJCP", percent: 8}], pe: 30.5, pb: 4.2, returns5y: [18, 20, 16, 14, 18], expenseRatio: 1.0, exitLoad: 1, fundManager: "Chirag Setalvad", risk: "High", category: "Mid Cap" },
            { name: "ICICI Prudential Low Risk Fund", type: "Debt", nav: 22.8, rating: 5, fundSize: 18000, aum: 36000, holdings: [{symbol: "Short Term Bonds", percent: 80}, {symbol: "Cash", percent: 20}], pe: null, pb: null, returns5y: [5, 6, 4, 3, 5], expenseRatio: 0.4, exitLoad: 0, fundManager: "Rahul Goswami", risk: "Low", category: "Debt" },
            { name: "Kotak High Return Fund", type: "Equity", nav: 80.2, rating: 3, fundSize: 15000, aum: 30000, holdings: [{symbol: "ZOMATO", percent: 15}, {symbol: "PAYTM", percent: 12}, {symbol: "RVNL", percent: 10}], pe: 45.6, pb: 6.5, returns5y: [25, 28, 22, 20, 25], expenseRatio: 1.8, exitLoad: 1, fundManager: "Devender Singhal", risk: "High", category: "High Return" },
            { name: "Axis Low Risk Fund", type: "Debt", nav: 25.6, rating: 4, fundSize: 12000, aum: 24000, holdings: [{symbol: "Treasury Bills", percent: 60}, {symbol: "AAA Bonds", percent: 40}], pe: null, pb: null, returns5y: [4, 5, 3, 2, 4], expenseRatio: 0.3, exitLoad: 0, fundManager: "Devang Shah", risk: "Low", category: "Low Risk" }
        ];
        // DOM Elements
        const searchInput = document.querySelector('.search-input');
        const searchResults = document.getElementById('search-results');
        const watchlistItems = document.getElementById('watchlist-items');
        const emptyWatchlist = document.getElementById('empty-watchlist');
        const openOrdersItems = document.getElementById('open-orders-items');
        const tradeHistoryItems = document.getElementById('trade-history-items');
        const emptyOpenOrders = document.getElementById('empty-open-orders');
        const emptyTradeHistory = document.getElementById('empty-trade-history');
        const portfolioItems = document.getElementById('portfolio-items');
        const emptyPortfolio = document.getElementById('empty-portfolio');
        const sortByNameBtn = document.getElementById('sort-by-name');
        const sortByPriceBtn = document.getElementById('sort-by-price');
        const navContainer = document.querySelector('.nav-container');
        const contentSections = document.querySelectorAll('.content-section');
        const productOptions = document.querySelectorAll('.product-option');
        const orderModal = document.getElementById('order-modal');
        const orderClose = document.getElementById('order-close');
        const cancelOrderBtn = document.getElementById('cancel-order-btn');
        const orderSymbol = document.getElementById('order-symbol');
        const orderName = document.getElementById('order-name');
        const orderPrice = document.getElementById('order-price');
        const orderType = document.getElementById('order-type');
        const productType = document.getElementById('product-type');
        const orderVariety = document.getElementById('order-variety');
        const limitPriceGroup = document.getElementById('limit-price-group');
        const limitPrice = document.getElementById('limit-price');
        const quantity = document.getElementById('quantity');
        const placeOrderBtn = document.getElementById('place-order-btn');
        const totalInvestment = document.getElementById('total-investment');
        const currentValueEl = document.getElementById('current-value');
        const profitLoss = document.getElementById('profit-loss');
        const daysChange = document.getElementById('days-change');
        const accountBalance = document.getElementById('account-balance');
        const investedAmount = document.getElementById('invested-amount');
        const totalReturns = document.getElementById('total-returns');
        const depositBtn = document.getElementById('deposit-btn');
        const withdrawBtn = document.getElementById('withdraw-btn');
        const depositModal = document.getElementById('deposit-modal');
        const depositClose = document.getElementById('deposit-close');
        const depositAmount = document.getElementById('deposit-amount');
        const depositMethod = document.getElementById('deposit-method');
        const depositQrSection = document.getElementById('deposit-qr-section');
        const depositUpiSection = document.getElementById('deposit-upi-section');
        const confirmDeposit = document.getElementById('confirm-deposit');
        const withdrawModal = document.getElementById('withdraw-modal');
        const withdrawClose = document.getElementById('withdraw-close');
        const withdrawAmount = document.getElementById('withdraw-amount');
        const withdrawMethod = document.getElementById('withdraw-method');
        const withdrawUpiSection = document.getElementById('withdraw-upi-section');
        const withdrawBankSection = document.getElementById('withdraw-bank-section');
        const confirmWithdraw = document.getElementById('confirm-withdraw');
        const withdrawalAnimation = document.getElementById('withdrawal-animation');
        const withdrawalMessage = document.getElementById('withdrawal-message');
        const withdrawalDetails = document.getElementById('withdrawal-details');
        const withdrawalItems = document.getElementById('withdrawal-items');
        const emptyWithdrawals = document.getElementById('empty-withdrawals');
        const withdrawalRequests = document.getElementById('withdrawal-requests');
        const orderAnimation = document.getElementById('order-animation');
        const orderAnimationMessage = document.getElementById('order-animation-message');
        const orderAnimationDetails = document.getElementById('order-animation-details');
        const fundAnimation = document.getElementById('fund-animation');
        const fundAnimationMessage = document.getElementById('fund-animation-message');
        const fundAnimationDetails = document.getElementById('fund-animation-details');
        const withdrawalProgress = document.getElementById('withdrawal-progress');
        const orderProgress = document.getElementById('order-progress');
        const fundProgress = document.getElementById('fund-progress');
        // New DOM Elements for Stock Detail Modal
        const stockDetailModal = document.getElementById('stock-detail-modal');
        const stockDetailClose = document.getElementById('stock-detail-close');
        const detailSymbol = document.getElementById('detail-symbol');
        const detailName = document.getElementById('detail-name');
        const detailPrice = document.getElementById('detail-price');
        const stockMetrics = document.getElementById('stock-metrics');
        const tradingviewLink = document.getElementById('tradingview-link');
        const detailOrderType = document.getElementById('detail-order-type');
        const detailProductType = document.getElementById('detail-product-type');
        const detailOrderVariety = document.getElementById('detail-order-variety');
        const detailLimitPriceGroup = document.getElementById('detail-limit-price-group');
        const detailLimitPrice = document.getElementById('detail-limit-price');
        const detailQuantity = document.getElementById('detail-quantity');
        const detailPlaceOrderBtn = document.getElementById('detail-place-order-btn');
        const detailCancelOrderBtn = document.getElementById('detail-cancel-order-btn');
        const derivActions = document.getElementById('deriv-actions');
        const futureBtn = document.getElementById('future-btn');
        const optionChainBtn = document.getElementById('option-chain-btn');
        const optionChainModal = document.getElementById('option-chain-modal');
        const chainClose = document.getElementById('chain-close');
        const chainSymbol = document.getElementById('chain-symbol');
        const chainItems = document.getElementById('chain-items');
        const companiesDiv = document.querySelector('.companies');
        const companiesItems = document.getElementById('companies-items');
        const instrumentType = document.getElementById('instrument-type');
        const strikeGroup = document.getElementById('strike-group');
        const strikePrice = document.getElementById('strike-price');
        const detailInstrumentType = document.getElementById('detail-instrument-type');
        const detailStrikeGroup = document.getElementById('detail-strike-group');
        const detailStrikePrice = document.getElementById('detail-strike-price');
        // Derivative DOM
        const derivOpenOrdersItems = document.getElementById('deriv-open-orders-items');
        const derivTradeHistoryItems = document.getElementById('deriv-trade-history-items');
        const emptyDerivOpenOrders = document.getElementById('empty-deriv-open-orders');
        const emptyDerivTradeHistory = document.getElementById('empty-deriv-trade-history');
        const positionsItems = document.getElementById('positions-items');
        const emptyPositions = document.getElementById('empty-positions');
        const derivTotalInvestment = document.getElementById('deriv-total-investment');
        const derivCurrentValue = document.getElementById('deriv-current-value');
        const derivProfitLoss = document.getElementById('deriv-profit-loss');
        const derivDaysChange = document.getElementById('deriv-days-change');
        const indicesItems = document.getElementById('indices-items');
        const foStocksItems = document.getElementById('fo-stocks-items');
        // Mutual Funds DOM
        const featuredItems = document.getElementById('featured-items');
        const equityItems = document.getElementById('equity-items');
        const debtItems = document.getElementById('debt-items');
        const hybridItems = document.getElementById('hybrid-items');
        const largecapItems = document.getElementById('largecap-items');
        const midcapItems = document.getElementById('midcap-items');
        const smallcapItems = document.getElementById('smallcap-items');
        const highreturnItems = document.getElementById('highreturn-items');
        const mfOrdersItems = document.getElementById('mf-orders-items');
        const emptyMfOrders = document.getElementById('empty-mf-orders');
        const oneTimeItems = document.getElementById('one-time-items');
        const sipItems = document.getElementById('sip-items');
        const emptyOneTime = document.getElementById('empty-one-time');
        const emptySip = document.getElementById('empty-sip');
        const mfDetailModal = document.getElementById('mf-detail-modal');
        const mfDetailClose = document.getElementById('mf-detail-close');
        const mfDetailName = document.getElementById('mf-detail-name');
        const mfDetailType = document.getElementById('mf-detail-type');
        const mfDetailNav = document.getElementById('mf-detail-nav');
        const mfMetrics = document.getElementById('mf-metrics');
        const mfHoldingsList = document.getElementById('mf-holdings-list');
        const mfDetailRisk = document.getElementById('mf-detail-risk');
        const mfInvestTypes = document.querySelectorAll('.mf-invest-type');
        const mfSipFrequencyGroup = document.getElementById('mf-sip-frequency-group');
        const mfAmount = document.getElementById('mf-amount');
        const mfFrequency = document.getElementById('mf-frequency');
        const mfPlaceOrderBtn = document.getElementById('mf-place-order-btn');
        const mfCancelOrderBtn = document.getElementById('mf-cancel-order-btn');
        const redeemModal = document.getElementById('redeem-modal');
        const redeemClose = document.getElementById('redeem-close');
        const redeemAmount = document.getElementById('redeem-amount');
        const confirmRedeem = document.getElementById('confirm-redeem');
      
        // NEW DOM Elements for Performance Analysis
        const indexDetailModal = document.getElementById('index-detail-modal');
        const indexDetailClose = document.getElementById('index-detail-close');
        const indexDetailSymbol = document.getElementById('index-detail-symbol');
        const indexDetailName = document.getElementById('index-detail-name');
        const indexDetailPrice = document.getElementById('index-detail-price');
        const indexPerformanceStats = document.getElementById('index-performance-stats');
        const indexPerformanceChart = document.getElementById('index-performance-chart');
        const indexCompaniesItems = document.getElementById('index-companies-items');
        const indexNewsItems = document.getElementById('index-news-items');
        const indexTrendsItems = document.getElementById('index-trends-items');
        const stockPerformanceStats = document.getElementById('stock-performance-stats');
        const stockPerformanceChart = document.getElementById('stock-performance-chart');
        const mfPerformanceStats = document.getElementById('mf-performance-stats');
        const mfPerformanceChart = document.getElementById('mf-performance-chart');
        const periodBtns = document.querySelectorAll('.period-btn');
      
        // New DOM for list modal
        const listModal = document.getElementById('list-modal');
        const listClose = document.getElementById('list-close');
        const listTitle = document.getElementById('list-title');
        const listItems = document.getElementById('list-items');
        // Sectors and categories DOM
        const sectorOptions = document.getElementById('sector-options');
        const mfCategoryOptions = document.getElementById('mf-category-options');
        // Additional stock lists
        const topMoversStocks = document.getElementById('top-movers-stocks');
        const topLosersStocks = document.getElementById('top-losers-stocks');
        const topVolumeStocks = document.getElementById('top-volume-stocks');
        const _52wHighStocks = document.getElementById('52w-high-stocks');
        const _52wLowStocks = document.getElementById('52w-low-stocks');
        // Additional deriv lists
        const highVolumeDeriv = document.getElementById('high-volume-deriv');
      
        // User data
        let currentProduct = 'stocks';
        let userWatchlist = [];
        let userPortfolio = [];
        let userOrders = [];
        let userDerivOrders = [];
        let userPositions = [];
        let userFunds = 0; // Starting with ₹0
        let withdrawalRequestsList = [];
        let revenueChart, profitChart, shareholdingChart;
        let mfReturnsChart;
        let userMfInvestments = { oneTime: [], sip: [] };
        let userMfOrders = [];
        let currentRedeemType, currentRedeemId;
        // F&O Stocks (large and mid cap)
        const foStocks = indianStocks.filter(s => s.marketCap !== "Small Cap");
        // Initialize with some stocks in watchlist
        userWatchlist = indianStocks.slice(0, 6);
      
        // Extended stock data with historical performance
        indianStocks.forEach(stock => {
            // Generate historical performance data for each stock
            stock.performance = {
                '1d': generateRandomReturn(-5, 5),
                '1w': generateRandomReturn(-10, 10),
                '1m': generateRandomReturn(-15, 15),
                '3m': generateRandomReturn(-20, 20),
                '6m': generateRandomReturn(-25, 25),
                '1y': generateRandomReturn(-30, 30),
                '3y': generateRandomReturn(-40, 40),
                '5y': generateRandomReturn(-50, 50)
            };
          
            // Generate historical price data for charts
            stock.historicalData = generateHistoricalData(stock.price);
        });
      
        // Extended index data with historical performance
        indices.forEach(index => {
            // Generate historical performance data for each index
            index.performance = {
                '1d': generateRandomReturn(-3, 3),
                '1w': generateRandomReturn(-7, 7),
                '1m': generateRandomReturn(-12, 12),
                '3m': generateRandomReturn(-18, 18),
                '6m': generateRandomReturn(-22, 22),
                '1y': generateRandomReturn(-25, 25),
                '3y': generateRandomReturn(-35, 35),
                '5y': generateRandomReturn(-45, 45)
            };
          
            // Generate historical price data for charts
            index.historicalData = generateHistoricalData(index.spot);
          
            // Generate constituent companies with weights
            index.companies = index.companies.map((company, i) => {
                return {
                    ...company,
                    weight: (100 / index.companies.length) + (Math.random() * 5 - 2.5)
                };
            });
          
            // Generate market news
            index.news = [
                {
                    title: "Market Shows Strong Bullish Trend",
                    date: "Today",
                    summary: "The market continues its upward trajectory with strong buying in banking and IT sectors."
                },
                {
                    title: "Analysts Predict Further Growth",
                    date: "Yesterday",
                    summary: "Leading market analysts predict continued growth in the coming weeks based on economic indicators."
                },
                {
                    title: "Foreign Investors Increase Holdings",
                    date: "2 days ago",
                    summary: "Foreign institutional investors have increased their holdings in key index stocks."
                }
            ];
          
            // Generate market trends
            index.trends = [
                { name: "Bullish Stocks", value: "65%", trend: "positive" },
                { name: "Bearish Stocks", value: "15%", trend: "negative" },
                { name: "Neutral Stocks", value: "20%", trend: "neutral" },
                { name: "Sector Rotation", value: "High", trend: "positive" },
                { name: "Market Volatility", value: "Medium", trend: "neutral" }
            ];
        });
      
        // Extended mutual fund data with historical performance
        mutualFunds.forEach(fund => {
            // Generate historical performance data for each fund
            fund.performance = {
                '1d': generateRandomReturn(-2, 2),
                '1w': generateRandomReturn(-5, 5),
                '1m': generateRandomReturn(-8, 8),
                '3m': generateRandomReturn(-12, 12),
                '6m': generateRandomReturn(-15, 15),
                '1y': generateRandomReturn(-20, 20),
                '3y': generateRandomReturn(-25, 25),
                '5y': generateRandomReturn(-30, 30)
            };
          
            // Generate historical NAV data for charts
            fund.historicalData = generateHistoricalData(fund.nav);
        });
      
        // Helper function to generate random returns
        function generateRandomReturn(min, max) {
            return (Math.random() * (max - min) + min).toFixed(2);
        }
      
        // Helper function to generate historical price data
        function generateHistoricalData(currentPrice) {
            const data = [];
            let price = currentPrice;
          
            // Generate 30 data points
            for (let i = 0; i < 30; i++) {
                // Random price movement between -2% and +2%
                const changePercent = (Math.random() * 4 - 2) / 100;
                price = price * (1 + changePercent);
                data.push(price);
            }
          
            return data.reverse(); // Return in chronological order (oldest first)
        }
      
        // Initialize the application
        updateWatchlistDisplay();
        updatePortfolioDisplay();
        updateOrdersDisplay();
        updateAccountSummary();
        updateWithdrawalRequests();
        updateNav('stocks');
      
        // Navigation click handler
        function navClick() {
            const navItems = navContainer.querySelectorAll('.nav-item');
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            contentSections.forEach(sec => sec.classList.remove('active'));
            const sectionId = this.dataset.section + '-section';
            document.getElementById(sectionId).classList.add('active');
            if (this.dataset.section === 'explore') {
                updateExploreDisplay();
            } else if (this.dataset.section === 'mf-explore') {
                updateMfExploreDisplay();
            } else if (this.dataset.section === 'mf-dashboard') {
                updateMfDashboardDisplay();
            } else if (this.dataset.section === 'mf-orders') {
                updateMfOrdersDisplay();
            }
        }
      
        // Update navigation based on product
        function updateNav(product) {
            navContainer.innerHTML = '';
            let sections;
            if (product === 'stocks') {
                sections = [
    {section: 'watchlist', label: 'Watchlist', active: true},
    {section: 'orders', label: 'Orders'},
    {section: 'portfolio', label: 'Portfolio'},
    {section: 'account', label: 'Account'}
];
            } else if (product === 'derivatives') {
                sections = [
                    {section: 'explore', label: 'Explore', active: true},
                    {section: 'deriv-orders', label: 'Orders'},
                    {section: 'positions', label: 'Positions'},
                    {section: 'account', label: 'Account'}
                ];
            } else if (product === 'mutualfunds') {
                sections = [
                    {section: 'mf-explore', label: 'Explore', active: true},
                    {section: 'mf-orders', label: 'Orders'},
                    {section: 'mf-dashboard', label: 'Dashboard'}
                ];
            }
            sections.forEach(sec => {
                const item = document.createElement('div');
                item.className = 'nav-item' + (sec.active ? ' active' : '');
                item.dataset.section = sec.section;
                item.textContent = sec.label;
                navContainer.appendChild(item);
                item.addEventListener('click', navClick);
            });
            // Activate first section
            contentSections.forEach(sec => sec.classList.remove('active'));
            document.getElementById(sections[0].section + '-section').classList.add('active');
            if (product === 'stocks') {
                updateStockAdditionalSections();
            } else if (product === 'derivatives') {
                updateExploreDisplay();
            } else if (product === 'mutualfunds') {
                updateMfExploreDisplay();
            }
        }
      
        // Product selection functionality
        productOptions.forEach(option => {
            option.addEventListener('click', function() {
                productOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                currentProduct = this.dataset.product;
                updateNav(currentProduct);
                if (this.dataset.product === 'mutualfunds') {
                    searchInput.placeholder = 'Search mutual funds (e.g., HDFC Equity, SBI Bluechip)';
                } else if (this.dataset.product === 'derivatives') {
                    searchInput.placeholder = 'Search derivatives (e.g., NIFTY, BANKNIFTY, RELIANCE)';
                } else {
                    searchInput.placeholder = 'Search stocks (e.g., RELIANCE, INFY, HDFC)';
                }
            });
        });
      
        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim().toUpperCase();
            if (searchTerm.length === 0) {
                searchResults.classList.remove('active');
                return;
            }
            let filtered;
            if (currentProduct === 'stocks') {
                filtered = indianStocks.filter(stock =>
                    stock.symbol.includes(searchTerm) || stock.name.toUpperCase().includes(searchTerm)
                );
            } else if (currentProduct === 'derivatives') {
                const allDerivSearch = [...indices, ...foStocks, ...topTradedOptions];
                filtered = allDerivSearch.filter(item =>
                    item.symbol.includes(searchTerm) || item.name.toUpperCase().includes(searchTerm)
                );
            } else if (currentProduct === 'mutualfunds') {
                filtered = mutualFunds.filter(fund =>
                    fund.name.toUpperCase().includes(searchTerm)
                );
            }
            displaySearchResults(filtered);
        });
      
        // Display search results
        function displaySearchResults(items) {
            searchResults.innerHTML = '';
            if (items.length === 0) {
                searchResults.innerHTML = '<div class="search-result-item">No items found</div>';
            } else {
                items.forEach(item => {
                    const isInWatchlist = currentProduct === 'stocks' ? userWatchlist.some(w => w.symbol === item.symbol) : false;
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.setAttribute('data-symbol', item.symbol || item.name.replace(/\s/g, '_').toUpperCase());
                    resultItem.innerHTML = `
                        <div class="search-result-info">
                            <span class="search-result-symbol">${item.symbol || item.name} <small>(${item.marketCap || item.type || 'Mutual Fund'})</small></span>
                            <span class="search-result-name">${item.name}</span>
                        </div>
                    `;
                    if (currentProduct === 'stocks') {
                        resultItem.innerHTML += `
                            <button class="add-to-watchlist" data-symbol="${item.symbol}" ${isInWatchlist ? 'disabled style="opacity: 0.5;"' : ''}>
                                <i class="fas ${isInWatchlist ? 'fa-check' : 'fa-plus'}"></i>
                            </button>
                        `;
                    }
                    searchResults.appendChild(resultItem);
                    resultItem.addEventListener('click', () => {
                        searchResults.classList.remove('active');
                        if (currentProduct === 'mutualfunds') {
                            openMfDetailModal(item);
                        } else if (currentProduct === 'derivatives' && (item.symbol.endsWith('CE') || item.symbol.endsWith('PE'))) {
                            openStockDetailModal(item);
                        } else {
                            const fullItem = (indices.find(i => i.symbol === item.symbol) || indianStocks.find(s => s.symbol === item.symbol) || item);
                            if (indices.some(i => i.symbol === fullItem.symbol)) {
                                openIndexDetailModal(fullItem);
                            } else {
                                openStockDetailModal(fullItem);
                            }
                        }
                    });
                });
            }
            searchResults.classList.add('active');
            if (currentProduct === 'stocks') {
                document.querySelectorAll('.add-to-watchlist:not([disabled])').forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const symbol = this.getAttribute('data-symbol');
                        addToWatchlist(symbol);
                        this.innerHTML = '<i class="fas fa-check"></i>';
                        this.disabled = true;
                        this.style.opacity = '0.5';
                    });
                });
            }
        }
      
        // Add stock to watchlist
        function addToWatchlist(symbol) {
            const stockToAdd = indianStocks.find(stock => stock.symbol === symbol);
            if (stockToAdd && !userWatchlist.some(stock => stock.symbol === symbol)) {
                userWatchlist.push(stockToAdd);
                updateWatchlistDisplay();
                showNotification(`${symbol} added to watchlist`, true);
            }
        }
      
        // Remove stock from watchlist
        function removeFromWatchlist(symbol) {
            userWatchlist = userWatchlist.filter(stock => stock.symbol !== symbol);
            updateWatchlistDisplay();
            showNotification(`${symbol} removed from watchlist`, true);
        }
      
        // Update watchlist display with brief info
        function updateWatchlistDisplay() {
            watchlistItems.innerHTML = '';
            if (userWatchlist.length === 0) {
                emptyWatchlist.style.display = 'block';
                return;
            }
            emptyWatchlist.style.display = 'none';
            userWatchlist.forEach(stock => {
                const row = document.createElement('tr');
                row.setAttribute('data-symbol', stock.symbol);
                const volumeDisplay = stock.volume >= 1000000 ? (stock.volume / 1000000).toFixed(1) + 'M' : (stock.volume / 1000).toFixed(1) + 'K';
                row.innerHTML = `
                    <td>
                        <div class="stock-info">
                            <span class="stock-symbol">${stock.symbol} <small>(${stock.marketCap})</small></span>
                            <span class="stock-name">${stock.name}</span>
                        </div>
                    </td>
                    <td class="stock-price">₹${stock.price.toFixed(2)}</td>
                    <td class="stock-change ${stock.change >= 0 ? 'positive' : 'negative'}">${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}</td>
                    <td class="stock-change ${stock.change >= 0 ? 'positive' : 'negative'}">${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%</td>
                    <td>${volumeDisplay}</td>
                    <td>${stock.pe.toFixed(2)}</td>
                    <td>₹${stock.marketCapValue} Cr</td>
                    <td>
                        <button class="action-btn remove-btn" data-symbol="${stock.symbol}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                `;
                watchlistItems.appendChild(row);
            });
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const symbol = this.getAttribute('data-symbol');
                    removeFromWatchlist(symbol);
                });
            });
            document.querySelectorAll('#watchlist-items tr').forEach(row => {
                row.addEventListener('click', function(e) {
                    if (e.target.closest('.remove-btn')) return;
                    const symbol = this.getAttribute('data-symbol');
                    const stock = userWatchlist.find(s => s.symbol === symbol);
                    if (stock) {
                        openStockDetailModal(stock);
                    }
                });
            });
        }
      
        // Sort watchlist
        sortByNameBtn.addEventListener('click', function() {
            userWatchlist.sort((a, b) => a.symbol.localeCompare(b.symbol));
            updateWatchlistDisplay();
        });
        sortByPriceBtn.addEventListener('click', function() {
            userWatchlist.sort((a, b) => b.price - a.price);
            updateWatchlistDisplay();
        });
      
        // Update stock additional sections (sectors)
        let currentSector = null;
        function updateStockAdditionalSections() {
            // Sectors
            const uniqueSectors = [...new Set(indianStocks.map(s => s.sector))];
            sectorOptions.innerHTML = '';
            uniqueSectors.forEach(sector => {
                const option = document.createElement('div');
                option.className = 'sector-option';
                option.textContent = sector;
                option.dataset.sector = sector;
                sectorOptions.appendChild(option);
                option.addEventListener('click', () => {
                    if (currentSector === sector) {
                        document.getElementById('sector-list').style.display = 'none';
                        currentSector = null;
                    } else {
                        const stocks = indianStocks.filter(s => s.sector === sector);
                        displayStockList(stocks, document.getElementById('sector-items'));
                        document.getElementById('sector-list').style.display = 'block';
                        currentSector = sector;
                    }
                });
            });
        }
      
        // Display stock list in table
        function displayStockList(stocks, container) {
            container.innerHTML = '';
            stocks.forEach(stock => {
                const row = document.createElement('tr');
                row.setAttribute('data-symbol', stock.symbol);
                const volumeDisplay = stock.volume >= 1000000 ? (stock.volume / 1000000).toFixed(1) + 'M' : (stock.volume / 1000).toFixed(1) + 'K';
                row.innerHTML = `
                    <td>
                        <div class="stock-info">
                            <span class="stock-symbol">${stock.symbol} <small>(${stock.marketCap})</small></span>
                            <span class="stock-name">${stock.name}</span>
                        </div>
                    </td>
                    <td class="stock-price">₹${stock.price.toFixed(2)}</td>
                    <td class="stock-change ${stock.change >= 0 ? 'positive' : 'negative'}">${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}</td>
                    <td class="stock-change ${stock.change >= 0 ? 'positive' : 'negative'}">${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%</td>
                    <td>${volumeDisplay}</td>
                    <td>${stock.pe.toFixed(2)}</td>
                    <td>₹${stock.marketCapValue} Cr</td>
                    <td>
                        <button class="action-btn add-btn" data-symbol="${stock.symbol}" ${userWatchlist.some(w => w.symbol === stock.symbol) ? 'disabled style="opacity: 0.5;"' : ''}>
                            <i class="fas fa-plus"></i>
                        </button>
                    </td>
                `;
                container.appendChild(row);
                row.querySelector('.add-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    addToWatchlist(stock.symbol);
                    row.querySelector('.add-btn').innerHTML = '<i class="fas fa-check"></i>';
                    row.querySelector('.add-btn').disabled = true;
                    row.querySelector('.add-btn').style.opacity = '0.5';
                });
                row.addEventListener('click', () => openStockDetailModal(stock));
            });
        }
      
        // Update explore display
        let currentDerivCat = null;
        function updateExploreDisplay() {
            // Indices
            indicesItems.innerHTML = '';
            indices.forEach(index => {
                const row = document.createElement('tr');
                row.setAttribute('data-symbol', index.symbol);
                row.innerHTML = `
                    <td>${index.symbol}<i class="fas fa-link option-chain-icon" data-symbol="${index.symbol}"></i></td>
                    <td>₹${index.spot.toFixed(2)}</td>
                    <td class="${index.change >= 0 ? 'positive' : 'negative'}">${index.change >= 0 ? '+' : ''}${index.change.toFixed(2)}</td>
                    <td class="${index.changePercent >= 0 ? 'positive' : 'negative'}">${index.changePercent >= 0 ? '+' : ''}${index.changePercent}%</td>
                `;
                indicesItems.appendChild(row);
                row.querySelector('.option-chain-icon').addEventListener('click', (e) => {
                    e.stopPropagation();
                    openOptionChain(index.symbol, true);
                });
                row.addEventListener('click', () => openIndexDetailModal(index));
            });
            // F&O Stocks
            foStocksItems.innerHTML = '';
            foStocks.forEach(stock => {
                const row = document.createElement('tr');
                row.setAttribute('data-symbol', stock.symbol);
                row.innerHTML = `
                    <td>${stock.symbol}</td>
                    <td>₹${stock.price.toFixed(2)}</td>
                    <td class="${stock.change >= 0 ? 'positive' : 'negative'}">${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}</td>
                    <td class="${stock.changePercent >= 0 ? 'positive' : 'negative'}">${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent}%</td>
                `;
                foStocksItems.appendChild(row);
                row.addEventListener('click', () => openStockDetailModal(stock));
            });
            // Deriv categories
            const derivCategories = [
                { name: 'Top Traded Options', data: () => topTradedOptions.sort((a, b) => b.volume - a.volume).slice(0, 5), hasVolume: true, hasCap: false, hasChange: true },
                { name: 'High Volume Derivatives', data: () => derivInstruments.sort((a, b) => b.volume - a.volume).slice(0, 5), hasVolume: true, hasCap: false, hasChange: true },
                { name: 'Top Movers', data: () => derivInstruments.sort((a, b) => b.changePercent - a.changePercent).slice(0, 5), hasVolume: false, hasCap: true, hasChange: false },
                { name: 'Top Losers', data: () => derivInstruments.sort((a, b) => a.changePercent - b.changePercent).slice(0, 5), hasVolume: false, hasCap: true, hasChange: false }
            ];
            const derivCategoryOptions = document.getElementById('deriv-category-options');
            derivCategoryOptions.innerHTML = '';
            derivCategories.forEach(cat => {
                const option = document.createElement('div');
                option.className = 'category-option';
                option.textContent = cat.name;
                option.dataset.cat = cat.name.replace(/\s/g, '-');
                derivCategoryOptions.appendChild(option);
                option.addEventListener('click', () => {
                    if (currentDerivCat === cat.name) {
                        document.getElementById('deriv-list-container').style.display = 'none';
                        currentDerivCat = null;
                    } else {
                        const items = cat.data();
                        const thead = document.getElementById('deriv-list-thead');
                        if (cat.hasVolume) {
                            thead.innerHTML = `<tr><th>Symbol</th><th>LTP</th><th>Change</th><th>Change %</th><th>Volume</th></tr>`;
                        } else {
                            thead.innerHTML = `<tr><th>Symbol</th><th>LTP</th><th>Change %</th><th>Cap</th></tr>`;
                        }
                        displayDerivList(items, document.getElementById('deriv-list-items'), cat.hasVolume, cat.hasCap, cat.hasChange);
                        document.getElementById('deriv-list-container').style.display = 'block';
                        currentDerivCat = cat.name;
                    }
                });
            });
        }
      
        // Display deriv list
        function displayDerivList(items, container, hasVolume = true, hasCap = false, hasChange = true) {
            container.innerHTML = '';
            items.forEach(opt => {
                const volumeDisplay = opt.volume >= 1000000 ? (opt.volume / 1000000).toFixed(1) + 'M' : (opt.volume / 1000).toFixed(2) + 'K';
                const row = document.createElement('tr');
                row.setAttribute('data-symbol', opt.symbol);
                if (hasVolume) {
                    row.innerHTML = `
                        <td>${opt.symbol}</td>
                        <td>₹${opt.price.toFixed(2)}</td>
                        <td class="${opt.change >= 0 ? 'positive' : 'negative'}">${opt.change >= 0 ? '+' : ''}${opt.change.toFixed(2)}</td>
                        <td class="${opt.changePercent >= 0 ? 'positive' : 'negative'}">${opt.changePercent >= 0 ? '+' : ''}${opt.changePercent}%</td>
                        <td>${volumeDisplay}</td>
                    `;
                } else {
                    row.innerHTML = `
                        <td>${opt.symbol}</td>
                        <td>₹${opt.price.toFixed(2)}</td>
                        <td class="${opt.changePercent >= 0 ? 'positive' : 'negative'}">${opt.changePercent >= 0 ? '+' : ''}${opt.changePercent}%</td>
                        <td>${opt.marketCap || 'Derivative'}</td>
                    `;
                }
                container.appendChild(row);
                row.addEventListener('click', () => openStockDetailModal(opt));
            });
        }
      
        // Update MF explore display
        let currentMfCategory = null;
        function updateMfExploreDisplay() {
            // Featured (random 5-6)
            const featured = mutualFunds.sort(() => 0.5 - Math.random()).slice(0, 6);
            displayMfCategory(featured, featuredItems);
            // Categories
            const uniqueCategories = [...new Set(mutualFunds.map(f => f.category))];
            mfCategoryOptions.innerHTML = '';
            uniqueCategories.forEach(category => {
                const option = document.createElement('div');
                option.className = 'category-option';
                option.textContent = category;
                option.dataset.category = category;
                mfCategoryOptions.appendChild(option);
                option.addEventListener('click', () => {
                    const divId = `${category.toLowerCase().replace(' ', '-')}-funds`;
                    const div = document.getElementById(divId);
                    if (currentMfCategory === category) {
                        div.style.display = 'none';
                        currentMfCategory = null;
                    } else {
                        document.querySelectorAll('.mf-category:not(#featured-funds)').forEach(d => d.style.display = 'none');
                        div.style.display = 'block';
                        currentMfCategory = category;
                    }
                });
            });
            // Function to display category
            function displayMfCategory(items, container) {
                container.innerHTML = '';
                items.forEach(fund => {
                    const row = document.createElement('tr');
                    row.setAttribute('data-name', fund.name);
                    row.innerHTML = `
                        <td>${fund.name}</td>
                        <td>₹${fund.nav.toFixed(2)}</td>
                        <td>${'★'.repeat(fund.rating)}</td>
                        <td>₹${fund.fundSize} Cr</td>
                        <td><span class="mf-riskometer mf-risk-${fund.risk.toLowerCase().replace(' ', '-')}">${fund.risk}</span></td>
                    `;
                    container.appendChild(row);
                    row.addEventListener('click', () => openMfDetailModal(fund));
                });
            }
            const equityFunds = mutualFunds.filter(f => f.type === 'Equity');
            displayMfCategory(equityFunds, equityItems);
            const debtFunds = mutualFunds.filter(f => f.type === 'Debt');
            displayMfCategory(debtFunds, debtItems);
            const hybridFunds = mutualFunds.filter(f => f.type === 'Hybrid');
            displayMfCategory(hybridFunds, hybridItems);
            const largeCapFunds = mutualFunds.filter(f => f.category === 'Large Cap');
            displayMfCategory(largeCapFunds, largecapItems);
            const midCapFunds = mutualFunds.filter(f => f.category === 'Mid Cap');
            displayMfCategory(midCapFunds, midcapItems);
            const smallCapFunds = mutualFunds.filter(f => f.category === 'Small Cap');
            displayMfCategory(smallCapFunds, smallcapItems);
            const highReturnFunds = mutualFunds.sort((a, b) => b.returns5y[0] - a.returns5y[0]).slice(0, 5);
            displayMfCategory(highReturnFunds, highreturnItems);
        }
      
        // MF detail modal
        function openMfDetailModal(fund) {
            mfDetailName.textContent = fund.name;
            mfDetailType.textContent = `(${fund.type} - ${fund.category})`;
            mfDetailNav.textContent = `NAV: ₹${fund.nav.toFixed(2)}`;
          
            // Update performance stats for 1D (default)
            updateMfPerformanceStats(fund, '1d');
          
            // Update performance chart for 1D (default)
            updateMfPerformanceChart(fund, '1d');
          
            // Metrics
            mfMetrics.innerHTML = '';
            const metrics = [
                {label: "Rating", value: '★'.repeat(fund.rating)},
                {label: "Fund Size", value: `₹${fund.fundSize} Cr`},
                {label: "AUM", value: `₹${fund.aum} Cr`},
                {label: "PE Ratio", value: fund.pe ? fund.pe.toFixed(2) : 'N/A'},
                {label: "PB Ratio", value: fund.pb ? fund.pb.toFixed(2) : 'N/A'},
                {label: "Expense Ratio", value: `${fund.expenseRatio}%`},
                {label: "Exit Load", value: `${fund.exitLoad}%`},
                {label: "Fund Manager", value: fund.fundManager}
            ];
            metrics.forEach(metric => {
                const card = document.createElement('div');
                card.className = 'metric-card';
                card.innerHTML = `
                    <h4>${metric.label}</h4>
                    <p>${metric.value}</p>
                `;
                mfMetrics.appendChild(card);
            });
            mfDetailRisk.innerHTML = `<span class="mf-riskometer mf-risk-${fund.risk.toLowerCase().replace(' ', '-')}">${fund.risk}</span>`;
            // Holdings
            mfHoldingsList.innerHTML = '';
            fund.holdings.forEach(holding => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${holding.symbol}</span> <span>${holding.percent}%</span>`;
                mfHoldingsList.appendChild(li);
            });
            // Returns chart
            if (mfReturnsChart) mfReturnsChart.destroy();
            const years = [2024, 2023, 2022, 2021, 2020];
            mfReturnsChart = new Chart(document.getElementById('mf-returns-chart'), {
                type: 'line',
                data: {
                    labels: years,
                    datasets: [{
                        label: 'Annual Returns (%)',
                        data: fund.returns5y,
                        borderColor: 'rgba(56, 116, 255, 1)',
                        backgroundColor: 'rgba(56, 116, 255, 0.2)',
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeInOutQuad'
                    }
                }
            });
            // Reset order form
            document.querySelectorAll('.mf-invest-type').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.mf-invest-type[data-type="one-time"]').classList.add('active');
            mfSipFrequencyGroup.classList.remove('active');
            mfAmount.value = '';
            mfFrequency.value = 'monthly';
            mfDetailModal.classList.add('active');
          
            // Add event listeners to period buttons
            const mfPeriodBtns = mfDetailModal.querySelectorAll('.period-btn');
            mfPeriodBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    mfPeriodBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const period = this.dataset.period;
                    updateMfPerformanceStats(fund, period);
                    updateMfPerformanceChart(fund, period);
                });
            });
        }
      
        mfDetailClose.addEventListener('click', () => mfDetailModal.classList.remove('active'));
        mfCancelOrderBtn.addEventListener('click', () => mfDetailModal.classList.remove('active'));
        mfInvestTypes.forEach(btn => {
            btn.addEventListener('click', function() {
                mfInvestTypes.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                mfSipFrequencyGroup.classList.toggle('active', this.dataset.type === 'sip');
            });
        });
      
        // Place MF order
        mfPlaceOrderBtn.addEventListener('click', function() {
            const investType = document.querySelector('.mf-invest-type.active').dataset.type;
            const amount = parseFloat(mfAmount.value);
            const frequency = investType === 'sip' ? mfFrequency.value : null;
            const fund = mutualFunds.find(f => f.name === mfDetailName.textContent);
            if (isNaN(amount) || amount < 500) {
                showNotification('Invalid amount (minimum ₹500)', false, true);
                return;
            }
            // Simulate bank deduction (since from bank, not app balance)
            const newOrder = {
                date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                name: fund.name,
                type: investType.toUpperCase() + (frequency ? ` (${frequency.charAt(0).toUpperCase() + frequency.slice(1)})` : ''),
                amount: amount,
                status: 'Pending'
            };
            userMfOrders.push(newOrder);
            updateMfOrdersDisplay();
            mfDetailModal.classList.remove('active');
            // Show processing animation for 30s
            orderAnimationMessage.textContent = "Processing Investment";
            orderAnimationDetails.textContent = `Your ${investType.toUpperCase()} investment of ₹${amount.toFixed(2)} in ${fund.name} is being processed...`;
            orderAnimation.classList.add('active');
            orderProgress.style.animation = 'progressAnimation 30s linear forwards';
            setTimeout(() => {
                orderAnimation.classList.remove('active');
                orderProgress.style.animation = '';
                orderProgress.style.width = '0%';
                // Complete order
                newOrder.status = 'Completed';
                userMfOrders[userMfOrders.length - 1] = newOrder; // Update status
                const units = amount / fund.nav;
                const investment = {
                    fund: fund.name,
                    type: investType,
                    frequency: frequency,
                    invested: amount,
                    units: units,
                    navAtPurchase: fund.nav,
                    date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                    totalInvested: amount // For SIP, will accumulate
                };
                if (investType === 'one-time') {
                    userMfInvestments.oneTime.push(investment);
                } else {
                    userMfInvestments.sip.push(investment);
                }
                updateMfDashboardDisplay();
                updateMfOrdersDisplay();
                showNotification(`Investment in ${fund.name} completed. Units allocated: ${units.toFixed(2)}`, true);
            }, 30000);
        });
      
        // Update MF orders display
        function updateMfOrdersDisplay() {
            mfOrdersItems.innerHTML = '';
            if (userMfOrders.length === 0) {
                emptyMfOrders.style.display = 'block';
            } else {
                emptyMfOrders.style.display = 'none';
                userMfOrders.forEach(order => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${order.date}</td>
                        <td>${order.name}</td>
                        <td>${order.type}</td>
                        <td>₹${order.amount.toFixed(2)}</td>
                        <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                    `;
                    mfOrdersItems.appendChild(row);
                });
            }
        }
      
        // Update MF dashboard display
        function updateMfDashboardDisplay() {
            // One-time
            oneTimeItems.innerHTML = '';
            if (userMfInvestments.oneTime.length === 0) {
                emptyOneTime.style.display = 'block';
            } else {
                emptyOneTime.style.display = 'none';
                userMfInvestments.oneTime.forEach((inv, id) => {
                    const fund = mutualFunds.find(f => f.name === inv.fund);
                    const currValue = inv.units * fund.nav;
                    const pl = currValue - inv.invested;
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${inv.fund}</td>
                        <td>₹${inv.invested.toFixed(2)}</td>
                        <td>${inv.units.toFixed(2)}</td>
                        <td>₹${fund.nav.toFixed(2)}</td>
                        <td>₹${currValue.toFixed(2)}</td>
                        <td class="${pl >= 0 ? 'positive' : 'negative'}">${pl >= 0 ? '+' : ''}₹${pl.toFixed(2)}</td>
                        <td><button class="mf-redeem-btn" data-type="oneTime" data-id="${id}">Redeem</button></td>
                    `;
                    oneTimeItems.appendChild(row);
                });
            }
            // SIP
            sipItems.innerHTML = '';
            if (userMfInvestments.sip.length === 0) {
                emptySip.style.display = 'block';
            } else {
                emptySip.style.display = 'none';
                userMfInvestments.sip.forEach((inv, id) => {
                    const fund = mutualFunds.find(f => f.name === inv.fund);
                    const currValue = inv.units * fund.nav;
                    const pl = currValue - inv.totalInvested;
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${inv.fund}</td>
                        <td>₹${inv.invested.toFixed(2)} (${inv.frequency})</td>
                        <td>₹${inv.totalInvested.toFixed(2)}</td>
                        <td>${inv.units.toFixed(2)}</td>
                        <td>₹${fund.nav.toFixed(2)}</td>
                        <td>₹${currValue.toFixed(2)}</td>
                        <td class="${pl >= 0 ? 'positive' : 'negative'}">${pl >= 0 ? '+' : ''}₹${pl.toFixed(2)}</td>
                        <td><button class="mf-redeem-btn" data-type="sip" data-id="${id}">Redeem</button></td>
                    `;
                    sipItems.appendChild(row);
                });
            }
            // Redeem buttons
            document.querySelectorAll('.mf-redeem-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    currentRedeemType = this.dataset.type;
                    currentRedeemId = parseInt(this.dataset.id);
                    redeemModal.classList.add('active');
                });
            });
        }
      
        // Redeem modal handlers
        redeemClose.addEventListener('click', () => redeemModal.classList.remove('active'));
        confirmRedeem.addEventListener('click', () => {
            const amount = parseFloat(redeemAmount.value);
            const inv = userMfInvestments[currentRedeemType][currentRedeemId];
            const fund = mutualFunds.find(f => f.name === inv.fund);
            const currValue = inv.units * fund.nav;
            if (isNaN(amount) || amount <= 0 || amount > currValue) {
                showNotification('Invalid redemption amount', false, true);
                return;
            }
            // Create redemption order
            const newOrder = {
                date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                name: inv.fund,
                type: 'Redemption',
                amount: amount,
                status: 'Pending'
            };
            userMfOrders.push(newOrder);
            updateMfOrdersDisplay();
            redeemModal.classList.remove('active');
            // Show processing animation for 30s
            orderAnimationMessage.textContent = "Processing Redemption";
            orderAnimationDetails.textContent = `Your partial redemption of ₹${amount.toFixed(2)} from ${inv.fund} is being processed...`;
            orderAnimation.classList.add('active');
            orderProgress.style.animation = 'progressAnimation 30s linear forwards';
            setTimeout(() => {
                orderAnimation.classList.remove('active');
                orderProgress.style.animation = '';
                orderProgress.style.width = '0%';
                // Complete redemption
                newOrder.status = 'Completed';
                userMfOrders[userMfOrders.length - 1] = newOrder; // Update status
                updateMfOrdersDisplay();
                // Update investment
                const redeemedUnits = amount / fund.nav;
                inv.units -= redeemedUnits;
                inv.invested -= (amount * (inv.invested / currValue));
                inv.totalInvested -= (amount * (inv.totalInvested / currValue));
                if (inv.units <= 0) {
                    userMfInvestments[currentRedeemType].splice(currentRedeemId, 1);
                }
                updateMfDashboardDisplay();
                showNotification(`Partial redemption from ${inv.fund} completed. ₹${amount.toFixed(2)} will be credited to your bank account within 3 days.`, true);
            }, 30000);
        });
      
        // Stock detail modal functionality
        function openStockDetailModal(item, transType = 'Buy') {
            const isIndex = indices.some(i => i.symbol === item.symbol);
            const isDeriv = item.symbol.endsWith('FUT') || item.symbol.endsWith('CE') || item.symbol.endsWith('PE');
          
            if (isIndex) {
                openIndexDetailModal(item);
                return;
            }
          
            detailSymbol.textContent = item.symbol;
            detailName.textContent = item.name;
            detailPrice.textContent = `₹${(item.spot || item.price).toFixed(2)}`;
            // Add change info
            const existingChange = document.querySelector('#detail-change');
            if (existingChange) existingChange.remove();
            const detailChange = document.createElement('span');
            detailChange.id = 'detail-change';
            detailChange.className = `stock-change ${item.change >= 0 ? 'positive' : 'negative'}`;
            detailChange.textContent = ` ${item.change >= 0 ? '+' : ''}${item.change.toFixed(2)} (${item.changePercent >= 0 ? '+' : ''}${item.changePercent.toFixed(2)}%)`;
            detailPrice.appendChild(detailChange);
          
            // Update performance stats for 1D (default)
            updateStockPerformanceStats(item, '1d');
          
            // Update performance chart for 1D (default)
            updateStockPerformanceChart(item, '1d');
          
            detailOrderType.value = transType;
            detailProductType.value = 'Intraday';
            detailOrderVariety.value = 'Market';
            detailLimitPriceGroup.classList.remove('active');
            detailLimitPrice.value = (item.spot || item.price).toFixed(2);
            detailQuantity.value = 1;
            detailInstrumentType.value = isDeriv ? (item.symbol.endsWith('FUT') ? 'Future' : (item.symbol.endsWith('CE') ? 'Call' : 'Put')) : 'Stock';
            detailStrikeGroup.style.display = detailInstrumentType.value === 'Call' || detailInstrumentType.value === 'Put' ? 'block' : 'none';
            if (isDeriv) {
                const parts = item.symbol.split('-');
                if (parts[1]) detailStrikePrice.value = parseFloat(parts[1].slice(0, -2));
            } else {
                detailStrikePrice.value = '';
            }
            // Hide irrelevant sections for derivatives
            stockMetrics.style.display = isDeriv ? 'none' : 'block';
            document.querySelector('.financials').style.display = isDeriv ? 'none' : 'block';
            document.querySelector('.shareholding').style.display = isDeriv ? 'none' : 'block';
            companiesDiv.style.display = 'none';
            derivActions.style.display = (currentProduct === 'derivatives' && !isDeriv) ? 'flex' : 'none';
            // Populate metrics if not deriv
            if (!isDeriv) {
                stockMetrics.innerHTML = '';
                const metrics = [
                    {label: "Today's High", value: `₹${item.todayHigh || item.high}`},
                    {label: "Today's Low", value: `₹${item.todayLow || item.low}`},
                    {label: "52 Week High", value: `₹${item._52High}`},
                    {label: "52 Week Low", value: `₹${item._52Low}`},
                    {label: "Volume (Increasing)", value: `${(item.volume / 1000000).toFixed(1)}M (+2.5%)`},
                    {label: "Traded Value (Increasing)", value: `₹${item.tradedValue} Cr (+3.2%)`},
                    {label: "Market Cap", value: `₹${item.marketCapValue} Cr`},
                    {label: "ROE", value: `${item.roe}%`},
                    {label: "PE Ratio", value: item.pe.toFixed(2)},
                    {label: "Dividend Yield", value: `${item.dividend}%`},
                    {label: "Face Value", value: `₹${item.faceValue}`},
                    {label: "Debt to Equity", value: item.debtEquity.toFixed(2)}
                ];
                metrics.forEach(metric => {
                    const card = document.createElement('div');
                    card.className = 'metric-card';
                    card.innerHTML = `
                        <h4>${metric.label}</h4>
                        <p>${metric.value}</p>
                    `;
                    stockMetrics.appendChild(card);
                });
            }
            // Destroy existing charts if any
            if (revenueChart) revenueChart.destroy();
            if (profitChart) profitChart.destroy();
            if (shareholdingChart) shareholdingChart.destroy();
            // For index, show companies and returns chart
            if (isIndex) {
                companiesDiv.style.display = 'block';
                companiesItems.innerHTML = '';
                item.companies.forEach(c => {
                    const row = document.createElement('tr');
                    row.innerHTML = `<td>${c.symbol}</td><td>${c.name}</td><td>₹${c.mktcap} Cr</td>`;
                    companiesItems.appendChild(row);
                });
                // Returns chart
                const years = [2024, 2023, 2022, 2021, 2020];
                revenueChart = new Chart(document.getElementById('revenue-chart'), {
                    type: 'bar',
                    data: {
                        labels: years,
                        datasets: [{
                            label: 'Annual Returns (%)',
                            data: item.returns5y,
                            backgroundColor: 'rgba(56, 116, 255, 0.6)',
                            borderColor: 'rgba(56, 116, 255, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        animation: {
                            duration: 1000,
                            easing: 'easeInOutQuad'
                        }
                    }
                });
                document.querySelector('.financials h3:first-of-type').textContent = 'Annual Returns Last 5 Years (%)';
                document.getElementById('profit-chart').parentNode.style.display = 'none';
                document.querySelector('.shareholding').style.display = 'none';
            } else {
                // Populate financials with charts if not index or deriv
                if (!isDeriv) {
                    const years = [2024, 2023, 2022, 2021, 2020];
                    // Revenue Bar Chart
                    revenueChart = new Chart(document.getElementById('revenue-chart'), {
                        type: 'bar',
                        data: {
                            labels: years,
                            datasets: [{
                                label: 'Revenue (Cr)',
                                data: item.revenueLast5,
                                backgroundColor: 'rgba(56, 116, 255, 0.6)',
                                borderColor: 'rgba(56, 116, 255, 1)',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            },
                            animation: {
                                duration: 1000,
                                easing: 'easeInOutQuad'
                            }
                        }
                    });
                    // Profit Bar Chart
                    profitChart = new Chart(document.getElementById('profit-chart'), {
                        type: 'bar',
                        data: {
                            labels: years,
                            datasets: [{
                                label: 'Profit (Cr)',
                                data: item.profitLast5,
                                backgroundColor: 'rgba(0, 184, 148, 0.6)',
                                borderColor: 'rgba(0, 184, 148, 1)',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            },
                            animation: {
                                duration: 1000,
                                easing: 'easeInOutQuad'
                            }
                        }
                    });
                    // Shareholding Pie Chart
                    shareholdingChart = new Chart(document.getElementById('shareholding-chart'), {
                        type: 'pie',
                        data: {
                            labels: Object.keys(item.shareHolding).map(key => key.charAt(0).toUpperCase() + key.slice(1)),
                            datasets: [{
                                data: Object.values(item.shareHolding),
                                backgroundColor: [
                                    'rgba(56, 116, 255, 0.8)',
                                    'rgba(255, 107, 53, 0.8)',
                                    'rgba(0, 184, 148, 0.8)',
                                    'rgba(255, 118, 117, 0.8)'
                                ],
                                borderColor: '#fff',
                                borderWidth: 2
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'right'
                                }
                            },
                            animation: {
                                animateRotate: true,
                                animateScale: true
                            }
                        }
                    });
                    document.getElementById('profit-chart').parentNode.style.display = 'block';
                    document.querySelector('.shareholding').style.display = 'block';
                }
            }
            // Set TradingView link
            tradingviewLink.href = `https://www.tradingview.com/symbols/NSE-${item.symbol}/`;
            stockDetailModal.classList.add('active');
            // Add listeners for deriv actions
            futureBtn.onclick = () => {
                let baseSpot = isIndex ? item.spot : item.price;
                const futPrice = baseSpot + (Math.random() * 2 - 1);
                const futItem = { symbol: `${item.symbol}-FUT`, name: `${item.name} Future`, price: futPrice, change: item.change, changePercent: item.changePercent };
                if (!derivInstruments.some(d => d.symbol === futItem.symbol)) {
                    derivInstruments.push(futItem);
                }
                openOrderModal(futItem, 'Buy');
            };
            optionChainBtn.onclick = () => openOptionChain(item.symbol, isIndex);
          
            // Add event listeners to period buttons
            const stockPeriodBtns = stockDetailModal.querySelectorAll('.period-btn');
            stockPeriodBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    stockPeriodBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const period = this.dataset.period;
                    updateStockPerformanceStats(item, period);
                    updateStockPerformanceChart(item, period);
                });
            });
        }
      
        stockDetailClose.addEventListener('click', () => {
            stockDetailModal.classList.remove('active');
        });
        detailCancelOrderBtn.addEventListener('click', () => {
            stockDetailModal.classList.remove('active');
        });
        detailOrderVariety.addEventListener('change', function() {
            detailLimitPriceGroup.classList.toggle('active', this.value === 'Limit');
        });
        detailInstrumentType.addEventListener('change', function() {
            detailStrikeGroup.style.display = (this.value === 'Call' || this.value === 'Put') ? 'block' : 'none';
        });
      
        // Open Index Detail Modal
        function openIndexDetailModal(index) {
            indexDetailSymbol.textContent = index.symbol;
            indexDetailName.textContent = index.name;
            indexDetailPrice.textContent = `₹${index.spot.toFixed(2)}`;
          
            // Add change info
            const existingChange = document.querySelector('#index-detail-change');
            if (existingChange) existingChange.remove();
            const indexDetailChange = document.createElement('span');
            indexDetailChange.id = 'index-detail-change';
            indexDetailChange.className = `stock-change ${index.change >= 0 ? 'positive' : 'negative'}`;
            indexDetailChange.textContent = ` ${index.change >= 0 ? '+' : ''}${index.change.toFixed(2)} (${index.changePercent >= 0 ? '+' : ''}${index.changePercent.toFixed(2)}%)`;
            indexDetailPrice.appendChild(indexDetailChange);
          
            // Update performance stats for 1D (default)
            updatePerformanceStats(index, '1d', indexPerformanceStats);
          
            // Update performance chart for 1D (default)
            updatePerformanceChart(index, '1d', indexPerformanceChart);
          
            // Update constituent companies
            updateIndexCompanies(index);
          
            // Update news
            updateIndexNews(index);
          
            // Update trends
            updateIndexTrends(index);
          
            // Add event listeners to period buttons
            const indexPeriodBtns = indexDetailModal.querySelectorAll('.period-btn');
            indexPeriodBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    indexPeriodBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const period = this.dataset.period;
                    updatePerformanceStats(index, period, indexPerformanceStats);
                    updatePerformanceChart(index, period, indexPerformanceChart);
                });
            });
          
            indexDetailModal.classList.add('active');
        }
      
        // Update performance stats
        function updatePerformanceStats(item, period, container) {
            const performance = item.performance[period];
            const isPositive = parseFloat(performance) >= 0;
          
            container.innerHTML = `
                <div class="performance-stat">
                    <h4>Return</h4>
                    <p class="${isPositive ? 'positive' : 'negative'}">${isPositive ? '+' : ''}${performance}%</p>
                </div>
                <div class="performance-stat">
                    <h4>Volatility</h4>
                    <p>${(Math.abs(performance) / 2).toFixed(2)}%</p>
                </div>
                <div class="performance-stat">
                    <h4>Sharpe Ratio</h4>
                    <p>${(Math.random() * 2 + 0.5).toFixed(2)}</p>
                </div>
                <div class="performance-stat">
                    <h4>Max Drawdown</h4>
                    <p class="negative">-${(Math.abs(performance) / 1.5).toFixed(2)}%</p>
                </div>
            `;
        }
      
        // Update stock performance stats
        function updateStockPerformanceStats(item, period) {
            updatePerformanceStats(item, period, stockPerformanceStats);
        }
      
        // Update MF performance stats
        function updateMfPerformanceStats(item, period) {
            updatePerformanceStats(item, period, mfPerformanceStats);
        }
      
        // Update performance chart
        function updatePerformanceChart(item, period, chartElement) {
            // Destroy existing chart if any
            if (window.currentPerformanceChartInstance) {
                window.currentPerformanceChartInstance.destroy();
            }
          
            // Get appropriate data based on period
            let labels, data;
          
            switch(period) {
                case '1d':
                    labels = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
                    data = generateIntradayData(item.historicalData[item.historicalData.length - 1]);
                    break;
                case '1w':
                    labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
                    data = generateWeeklyData(item.historicalData);
                    break;
                case '1m':
                    labels = generateMonthLabels();
                    data = item.historicalData.slice(-30);
                    break;
                case '3m':
                    labels = generateQuarterLabels();
                    data = item.historicalData.slice(-90);
                    break;
                case '6m':
                    labels = generateHalfYearLabels();
                    data = item.historicalData.slice(-180);
                    break;
                case '1y':
                    labels = generateYearLabels();
                    data = item.historicalData;
                    break;
                case '3y':
                    labels = ['Year 1', 'Year 2', 'Year 3'];
                    data = [
                        item.historicalData[0],
                        item.historicalData[Math.floor(item.historicalData.length / 2)],
                        item.historicalData[item.historicalData.length - 1]
                    ];
                    break;
                case '5y':
                    labels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
                    data = [
                        item.historicalData[0],
                        item.historicalData[Math.floor(item.historicalData.length / 4)],
                        item.historicalData[Math.floor(item.historicalData.length / 2)],
                        item.historicalData[Math.floor(item.historicalData.length * 3 / 4)],
                        item.historicalData[item.historicalData.length - 1]
                    ];
                    break;
            }
          
            // Create chart
            const ctx = chartElement.getContext('2d');
            window.currentPerformanceChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: `${item.symbol} Price`,
                        data: data,
                        borderColor: 'rgba(56, 116, 255, 1)',
                        backgroundColor: 'rgba(56, 116, 255, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    }
                }
            });
        }
      
        // Update stock performance chart
        function updateStockPerformanceChart(item, period) {
            updatePerformanceChart(item, period, stockPerformanceChart);
        }
      
        // Update MF performance chart
        function updateMfPerformanceChart(item, period) {
            updatePerformanceChart(item, period, mfPerformanceChart);
        }
      
        // Helper functions for chart data generation
        function generateIntradayData(startPrice) {
            const data = [startPrice];
            let currentPrice = startPrice;
          
            for (let i = 1; i < 7; i++) {
                const changePercent = (Math.random() * 0.5 - 0.25) / 100;
                currentPrice = currentPrice * (1 + changePercent);
                data.push(currentPrice);
            }
          
            return data;
        }
      
        function generateWeeklyData(historicalData) {
            return [
                historicalData[historicalData.length - 5],
                historicalData[historicalData.length - 4],
                historicalData[historicalData.length - 3],
                historicalData[historicalData.length - 2],
                historicalData[historicalData.length - 1]
            ];
        }
      
        function generateMonthLabels() {
            const labels = [];
            for (let i = 30; i > 0; i--) {
                labels.push(`${i}D`);
            }
            return labels;
        }
      
        function generateQuarterLabels() {
            const labels = [];
            for (let i = 90; i > 0; i -= 10) {
                labels.push(`${i}D`);
            }
            return labels;
        }
      
        function generateHalfYearLabels() {
            const labels = [];
            for (let i = 6; i > 0; i--) {
                labels.push(`${i}M`);
            }
            return labels;
        }
      
        function generateYearLabels() {
            const labels = [];
            for (let i = 12; i > 0; i--) {
                labels.push(`${i}M`);
            }
            return labels;
        }
      
        // Update index companies
        function updateIndexCompanies(index) {
            indexCompaniesItems.innerHTML = '';
          
            index.companies.forEach(company => {
                const stock = indianStocks.find(s => s.symbol === company.symbol);
                if (stock) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${company.symbol}</td>
                        <td>${company.name}</td>
                        <td>${company.weight.toFixed(2)}%</td>
                        <td>₹${stock.price.toFixed(2)}</td>
                        <td class="${stock.change >= 0 ? 'positive' : 'negative'}">${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)}</td>
                    `;
                    indexCompaniesItems.appendChild(row);
                }
            });
        }
      
        // Update index news
        function updateIndexNews(index) {
            indexNewsItems.innerHTML = '';
          
            index.news.forEach(newsItem => {
                const newsElement = document.createElement('div');
                newsElement.className = 'news-item';
                newsElement.innerHTML = `
                    <div class="news-title">${newsItem.title}</div>
                    <div class="news-date">${newsItem.date}</div>
                    <div class="news-summary">${newsItem.summary}</div>
                `;
                indexNewsItems.appendChild(newsElement);
            });
        }
      
        // Update index trends
        function updateIndexTrends(index) {
            indexTrendsItems.innerHTML = '';
          
            index.trends.forEach(trend => {
                const trendElement = document.createElement('div');
                trendElement.className = 'trend-item';
                trendElement.innerHTML = `
                    <span class="trend-name">${trend.name}</span>
                    <span class="trend-value ${trend.trend === 'positive' ? 'positive-trend' : (trend.trend === 'negative' ? 'negative-trend' : '')}">${trend.value}</span>
                `;
                indexTrendsItems.appendChild(trendElement);
            });
        }
      
        // Close index detail modal
        indexDetailClose.addEventListener('click', () => {
            indexDetailModal.classList.remove('active');
        });
      
        // Option Chain functionality
        chainClose.addEventListener('click', () => {
            optionChainModal.classList.remove('active');
        });
        function openOptionChain(symbol, isIndex) {
            const spot = isIndex ? indices.find(i => i.symbol === symbol).spot : indianStocks.find(s => s.symbol === symbol).price;
            const step = symbol === "NIFTY" || symbol === "BANKNIFTY" ? 50 : 5;
            const strikes = [];
            for (let i = -10; i <= 10; i++) {
                strikes.push(Math.round(spot / step) * step + i * step);
            }
            const uniqueStrikes = [...new Set(strikes)].sort((a, b) => a - b);
            chainItems.innerHTML = '';
            uniqueStrikes.forEach(strike => {
                const callIntrinsic = Math.max(0, spot - strike);
                const putIntrinsic = Math.max(0, strike - spot);
                const timeValue = Math.random() * 50;
                const callPremium = callIntrinsic + timeValue;
                const putPremium = putIntrinsic + timeValue;
                const callOI = Math.floor(Math.random() * 100000);
                const putOI = Math.floor(Math.random() * 100000);
                const callVol = Math.floor(Math.random() * 1000000);
                const putVol = Math.floor(Math.random() * 1000000);
                const callOIChange = Math.floor(Math.random() * 10000 - 5000);
                const putOIChange = Math.floor(Math.random() * 10000 - 5000);
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${callOI}</td>
                    <td class="chain-call" data-symbol="${symbol}-${strike}CE" data-price="${callPremium.toFixed(2)}">₹${callPremium.toFixed(2)}</td>
                    <td>${strike}</td>
                    <td class="chain-put" data-symbol="${symbol}-${strike}PE" data-price="${putPremium.toFixed(2)}">₹${putPremium.toFixed(2)}</td>
                    <td>${putOI}</td>
                    <td>${callVol}</td>
                    <td>${putVol}</td>
                    <td class="${callOIChange >= 0 ? 'positive' : 'negative'}">${callOIChange >= 0 ? '+' : ''}${callOIChange}</td>
                    <td class="${putOIChange >= 0 ? 'positive' : 'negative'}">${putOIChange >= 0 ? '+' : ''}${putOIChange}</td>
                `;
                chainItems.appendChild(row);
            });
            chainSymbol.textContent = symbol;
            optionChainModal.classList.add('active');
            document.querySelectorAll('.chain-call, .chain-put').forEach(cell => {
                cell.addEventListener('click', () => {
                    const optSymbol = cell.dataset.symbol;
                    const price = parseFloat(cell.dataset.price);
                    const type = optSymbol.endsWith('CE') ? 'Call' : 'Put';
                    const optItem = { symbol: optSymbol, name: `${symbol} ${optSymbol.split('-')[1]} ${type}`, price, change: 0, changePercent: 0 };
                    if (!derivInstruments.some(d => d.symbol === optSymbol)) {
                        derivInstruments.push(optItem);
                    }
                    optionChainModal.classList.remove('active');
                    openOrderModal(optItem, 'Buy');
                });
            });
        }
      
        // Place order from detail modal
        detailPlaceOrderBtn.addEventListener('click', function() {
            let symbol = detailSymbol.textContent;
            const transType = detailOrderType.value;
            const prodType = detailProductType.value;
            const variety = detailOrderVariety.value;
            const instrType = detailInstrumentType.value;
            const strike = parseFloat(detailStrikePrice.value);
            const qty = parseInt(detailQuantity.value);
            let price = variety === 'Market' ? parseFloat((indianStocks.find(s => s.symbol === symbol) || indices.find(i => i.symbol === symbol) || derivInstruments.find(d => d.symbol === symbol) || {}).price || detailLimitPrice.value) : parseFloat(detailLimitPrice.value);
            if ((instrType === 'Call' || instrType === 'Put') && !isNaN(strike)) {
                symbol = `${symbol.split('-')[0]}-${strike}${instrType === 'Call' ? 'CE' : 'PE'}`;
            } else if (instrType === 'Future') {
                symbol = `${symbol.split('-')[0]}-FUT`;
            }
            if (isNaN(qty) || qty < 1) {
                showNotification('Invalid quantity', false, true);
                return;
            }
            if (isNaN(price) || price <= 0) {
                showNotification('Invalid price', false, true);
                return;
            }
            if ((instrType === 'Call' || instrType === 'Put') && isNaN(strike)) {
                showNotification('Invalid strike price', false, true);
                return;
            }
            const totalCost = qty * price;
            const positions = currentProduct === 'derivatives' ? userPositions : userPortfolio;
            const orders = currentProduct === 'derivatives' ? userDerivOrders : userOrders;
            const positionItem = positions.find(p => p.symbol === symbol);
            const heldQty = positionItem ? positionItem.quantity : 0;
            if (transType === 'Sell' && qty > heldQty) {
                showNotification('Insufficient quantity to sell', false, true);
                return;
            }
            if (transType === 'Buy' && totalCost > userFunds) {
                const shortfall = totalCost - userFunds;
                showNotification(`Add ₹${shortfall.toFixed(2)} to complete order`, false, true);
                return;
            }
            const newOrder = {
                date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                symbol,
                transaction: transType,
                quantity: qty,
                price: price.toFixed(2),
                status: 'Pending'
            };
            orders.push(newOrder);
            currentProduct === 'derivatives' ? updateDerivOrdersDisplay() : updateOrdersDisplay();
            stockDetailModal.classList.remove('active');
            // Show order placed animation
            orderAnimationMessage.textContent = "Order Placed";
            orderAnimationDetails.textContent = `Order for ${qty} of ${symbol} has been placed successfully`;
            orderAnimation.classList.add('active');
            orderProgress.classList.add('progress-animation');
            setTimeout(() => {
                orderAnimation.classList.remove('active');
                orderProgress.classList.remove('progress-animation');
                showNotification(`Order placed for ${qty} of ${symbol}`, true);
                // Simulate execution
                setTimeout(() => {
                    const turnover = qty * price;
                    const charges = calculateCharges(transType, prodType, turnover);
                    newOrder.charges = charges.toFixed(2);
                    newOrder.status = 'Executed';
                    currentProduct === 'derivatives' ? updateDerivOrdersDisplay() : updateOrdersDisplay();
                    if (transType === 'Buy') {
                        currentProduct === 'derivatives' ? addToPositions(symbol, qty, price, charges) : addToPortfolio(symbol, qty, price, charges);
                        userFunds -= (totalCost + charges);
                    } else if (transType === 'Sell') {
                        currentProduct === 'derivatives' ? sellFromPositions(symbol, qty, price) : sellFromPortfolio(symbol, qty, price);
                        userFunds += (totalCost - charges);
                    }
                    currentProduct === 'derivatives' ? updatePositionsDisplay() : updatePortfolioDisplay();
                    updateAccountSummary();
                    // Show order completed animation
                    orderAnimationMessage.textContent = "Order Completed";
                    orderAnimationDetails.textContent = `Order for ${qty} of ${symbol} has been executed successfully`;
                    orderAnimation.classList.add('active');
                    orderProgress.classList.add('progress-animation');
                    setTimeout(() => {
                        orderAnimation.classList.remove('active');
                        orderProgress.classList.remove('progress-animation');
                        showNotification(`Order for ${symbol} executed`, true);
                    }, 3000);
                }, 2000);
            }, 3000);
        });
      
        // Calculate charges function
        function calculateCharges(transType, prodType, turnover) {
            let stt_rate = 0;
            let stamp_rate = 0;
            const transaction_rate = 0.0000345;
            const sebi_rate = 0.000001;
            const gst_rate = 0.18;
            if (prodType === 'Delivery') {
                stt_rate = 0.001;
                stamp_rate = (transType === 'Buy') ? 0.00015 : 0;
            } else { // Intraday
                stt_rate = (transType === 'Sell') ? 0.00025 : 0;
                stamp_rate = (transType === 'Buy') ? 0.00003 : 0;
            }
            const stt = turnover * stt_rate;
            const transaction = turnover * transaction_rate;
            const gst = transaction * gst_rate;
            const sebi = turnover * sebi_rate;
            const stamp = turnover * stamp_rate;
            return stt + transaction + gst + sebi + stamp;
        }
      
        // Original order modal (for portfolio clicks)
        function openOrderModal(item, transType = 'Buy') {
            orderSymbol.textContent = item.symbol;
            orderName.textContent = item.name;
            orderPrice.textContent = `₹${(item.spot || item.price).toFixed(2)}`;
            orderType.value = transType;
            productType.value = 'Intraday';
            orderVariety.value = 'Market';
            limitPriceGroup.classList.remove('active');
            limitPrice.value = (item.spot || item.price).toFixed(2);
            quantity.value = 1;
            const isDeriv = item.symbol.endsWith('FUT') || item.symbol.endsWith('CE') || item.symbol.endsWith('PE');
            instrumentType.value = isDeriv ? (item.symbol.endsWith('FUT') ? 'Future' : (item.symbol.endsWith('CE') ? 'Call' : 'Put')) : 'Stock';
            strikeGroup.style.display = instrumentType.value === 'Call' || instrumentType.value === 'Put' ? 'block' : 'none';
            if (isDeriv) {
                const parts = item.symbol.split('-');
                if (parts[1]) strikePrice.value = parseFloat(parts[1].slice(0, -2));
            } else {
                strikePrice.value = '';
            }
            orderModal.classList.add('active');
        }
        orderClose.addEventListener('click', () => {
            orderModal.classList.remove('active');
        });
        cancelOrderBtn.addEventListener('click', () => {
            orderModal.classList.remove('active');
        });
        orderVariety.addEventListener('change', function() {
            limitPriceGroup.classList.toggle('active', this.value === 'Limit');
        });
        instrumentType.addEventListener('change', function() {
            strikeGroup.style.display = (this.value === 'Call' || this.value === 'Put') ? 'block' : 'none';
        });
      
        // Add to portfolio
        function addToPortfolio(symbol, qty, buyPrice, charges = 0) {
            const stock = indianStocks.find(s => s.symbol === symbol) || {name: symbol};
            let portfolioItem = userPortfolio.find(p => p.symbol === symbol);
            if (!portfolioItem) {
                portfolioItem = {
                    symbol: symbol,
                    name: stock.name,
                    quantity: 0,
                    avgPrice: 0,
                    invested: 0
                };
                userPortfolio.push(portfolioItem);
            }
            const newInvested = qty * buyPrice + charges;
            const totalQty = portfolioItem.quantity + qty;
            portfolioItem.avgPrice = ((portfolioItem.avgPrice * portfolioItem.quantity) + newInvested) / totalQty;
            portfolioItem.quantity = totalQty;
            portfolioItem.invested += newInvested;
            updatePortfolioDisplay();
        }
      
        // Sell from portfolio
        function sellFromPortfolio(symbol, qty, price) {
            const portfolioItem = userPortfolio.find(p => p.symbol === symbol);
            if (!portfolioItem || qty > portfolioItem.quantity) return;
            const reduceInvested = portfolioItem.avgPrice * qty;
            portfolioItem.quantity -= qty;
            portfolioItem.invested -= reduceInvested;
            if (portfolioItem.quantity <= 0) {
                userPortfolio = userPortfolio.filter(p => p.symbol !== symbol);
            }
            updatePortfolioDisplay();
        }
      
        // Update portfolio display
        function updatePortfolioDisplay() {
            portfolioItems.innerHTML = '';
            if (userPortfolio.length === 0) {
                emptyPortfolio.style.display = 'block';
            } else {
                emptyPortfolio.style.display = 'none';
                let totalInvest = 0;
                let currentVal = 0;
                let pl = 0;
                userPortfolio.forEach(item => {
                    const stock = indianStocks.find(s => s.symbol === item.symbol) || {price: 0}; // Fallback if not found
                    const currValue = item.quantity * stock.price;
                    const itemPL = currValue - item.invested;
                    const itemPLPercent = item.invested ? (itemPL / item.invested * 100).toFixed(2) : 0;
                    totalInvest += item.invested;
                    currentVal += currValue;
                    pl += itemPL;
                    const row = document.createElement('tr');
                    row.setAttribute('data-symbol', item.symbol);
                    row.innerHTML = `
                        <td>
                            <div class="stock-info">
                                <span class="stock-symbol">${item.symbol}</span>
                                <span class="stock-name">${item.name}</span>
                            </div>
                        </td>
                        <td>${item.quantity}</td>
                        <td>₹${item.avgPrice.toFixed(2)}</td>
                        <td>₹${item.invested.toFixed(2)}</td>
                        <td class="stock-price">₹${stock.price.toFixed(2)}</td>
                        <td>₹${currValue.toFixed(2)}</td>
                        <td class="${itemPL >= 0 ? 'positive' : 'negative'}">${itemPL >= 0 ? '+' : ''}₹${itemPL.toFixed(2)}</td>
                        <td class="${itemPL >= 0 ? 'positive' : 'negative'}">${itemPL >= 0 ? '+' : ''}${itemPLPercent}%</td>
                    `;
                    portfolioItems.appendChild(row);
                });
                totalInvestment.textContent = `₹${totalInvest.toFixed(2)}`;
                currentValueEl.textContent = `₹${currentVal.toFixed(2)}`;
                profitLoss.textContent = `${pl >= 0 ? '+' : ''}₹${pl.toFixed(2)}`;
                profitLoss.className = pl >= 0 ? 'positive' : 'negative';
                const dayCh = (pl * 0.05).toFixed(2);
                daysChange.textContent = `${dayCh >= 0 ? '+' : ''}₹${dayCh}`;
                daysChange.className = dayCh >= 0 ? 'positive' : 'negative';
            }
            // Updated click handler for sell
            document.querySelectorAll('#portfolio-items tr').forEach(row => {
                row.addEventListener('click', function() {
                    const symbol = this.getAttribute('data-symbol');
                    const item = userPortfolio.find(p => p.symbol === symbol);
                    if (item) {
                        const stock = indianStocks.find(s => s.symbol === symbol) || {symbol: symbol, name: item.name, price: 0}; // Fallback
                        openOrderModal(stock, 'Sell');
                    }
                });
            });
        }
      
        // Add to positions (derivatives)
        function addToPositions(symbol, qty, buyPrice, charges = 0) {
            const instr = derivInstruments.find(d => d.symbol === symbol) || {name: symbol};
            let positionItem = userPositions.find(p => p.symbol === symbol);
            if (!positionItem) {
                positionItem = {
                    symbol: symbol,
                    name: instr.name,
                    quantity: 0,
                    avgPrice: 0,
                    invested: 0
                };
                userPositions.push(positionItem);
            }
            const newInvested = qty * buyPrice + charges;
            const totalQty = positionItem.quantity + qty;
            positionItem.avgPrice = ((positionItem.avgPrice * positionItem.quantity) + newInvested) / totalQty;
            positionItem.quantity = totalQty;
            positionItem.invested += newInvested;
            updatePositionsDisplay();
        }
      
        // Sell from positions
        function sellFromPositions(symbol, qty, price) {
            const positionItem = userPositions.find(p => p.symbol === symbol);
            if (!positionItem || qty > positionItem.quantity) return;
            const reduceInvested = positionItem.avgPrice * qty;
            positionItem.quantity -= qty;
            positionItem.invested -= reduceInvested;
            if (positionItem.quantity <= 0) {
                userPositions = userPositions.filter(p => p.symbol !== symbol);
            }
            updatePositionsDisplay();
        }
      
        // Update positions display
        function updatePositionsDisplay() {
            positionsItems.innerHTML = '';
            if (userPositions.length === 0) {
                emptyPositions.style.display = 'block';
            } else {
                emptyPositions.style.display = 'none';
                let totalInvest = 0;
                let currentVal = 0;
                let pl = 0;
                userPositions.forEach(item => {
                    const instr = derivInstruments.find(d => d.symbol === item.symbol) || {price: 0}; // Use derivInstruments for lookup
                    const currValue = item.quantity * instr.price;
                    const itemPL = currValue - item.invested;
                    const itemPLPercent = item.invested ? (itemPL / item.invested * 100).toFixed(2) : 0;
                    totalInvest += item.invested;
                    currentVal += currValue;
                    pl += itemPL;
                    const row = document.createElement('tr');
                    row.setAttribute('data-symbol', item.symbol);
                    row.innerHTML = `
                        <td>
                            <div class="stock-info">
                                <span class="stock-symbol">${item.symbol}</span>
                                <span class="stock-name">${item.name}</span>
                            </div>
                        </td>
                        <td>${item.quantity}</td>
                        <td>₹${item.avgPrice.toFixed(2)}</td>
                        <td>₹${item.invested.toFixed(2)}</td>
                        <td class="stock-price">₹${instr.price.toFixed(2)}</td>
                        <td>₹${currValue.toFixed(2)}</td>
                        <td class="${itemPL >= 0 ? 'positive' : 'negative'}">${itemPL >= 0 ? '+' : ''}₹${itemPL.toFixed(2)}</td>
                        <td class="${itemPL >= 0 ? 'positive' : 'negative'}">${itemPL >= 0 ? '+' : ''}${itemPLPercent}%</td>
                    `;
                    positionsItems.appendChild(row);
                });
                derivTotalInvestment.textContent = `₹${totalInvest.toFixed(2)}`;
                derivCurrentValue.textContent = `₹${currentVal.toFixed(2)}`;
                derivProfitLoss.textContent = `${pl >= 0 ? '+' : ''}₹${pl.toFixed(2)}`;
                derivProfitLoss.className = pl >= 0 ? 'positive' : 'negative';
                const dayCh = (pl * 0.05).toFixed(2);
                derivDaysChange.textContent = `${dayCh >= 0 ? '+' : ''}₹${dayCh}`;
                derivDaysChange.className = dayCh >= 0 ? 'positive' : 'negative';
            }
            // Updated click handler for sell (using derivInstruments)
            document.querySelectorAll('#positions-items tr').forEach(row => {
                row.addEventListener('click', function() {
                    const symbol = this.getAttribute('data-symbol');
                    const item = userPositions.find(p => p.symbol === symbol);
                    if (item) {
                        const instr = derivInstruments.find(d => d.symbol === symbol) || {symbol: symbol, name: item.name, price: 0}; // Fallback
                        openOrderModal(instr, 'Sell');
                    }
                });
            });
        }
      
        // Update orders display
        function updateOrdersDisplay() {
            openOrdersItems.innerHTML = '';
            tradeHistoryItems.innerHTML = '';
            const openOrders = userOrders.filter(order => order.status === 'Pending');
            const historyOrders = userOrders.filter(order => order.status !== 'Pending');
            if (openOrders.length === 0) {
                emptyOpenOrders.style.display = 'block';
            } else {
                emptyOpenOrders.style.display = 'none';
                openOrders.forEach((order, index) => {
                    const row = document.createElement('tr');
                    row.setAttribute('data-id', userOrders.indexOf(order));
                    row.innerHTML = `
                        <td>${order.date}</td>
                        <td>${order.symbol}</td>
                        <td>${order.transaction}</td>
                        <td>${order.quantity}</td>
                        <td>₹${order.price}</td>
                        <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                        <td>-</td>
                    `;
                    openOrdersItems.appendChild(row);
                });
            }
            if (historyOrders.length === 0) {
                emptyTradeHistory.style.display = 'block';
            } else {
                emptyTradeHistory.style.display = 'none';
                historyOrders.forEach((order, index) => {
                    const row = document.createElement('tr');
                    row.setAttribute('data-id', userOrders.indexOf(order));
                    row.innerHTML = `
                        <td>${order.date}</td>
                        <td>${order.symbol}</td>
                        <td>${order.transaction}</td>
                        <td>${order.quantity}</td>
                        <td>₹${order.price}</td>
                        <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                        <td>₹${order.charges}</td>
                    `;
                    tradeHistoryItems.appendChild(row);
                });
            }
        }
      
        // Update derivative orders display
        function updateDerivOrdersDisplay() {
            derivOpenOrdersItems.innerHTML = '';
            derivTradeHistoryItems.innerHTML = '';
            const openOrders = userDerivOrders.filter(order => order.status === 'Pending');
            const historyOrders = userDerivOrders.filter(order => order.status !== 'Pending');
            if (openOrders.length === 0) {
                emptyDerivOpenOrders.style.display = 'block';
            } else {
                emptyDerivOpenOrders.style.display = 'none';
                openOrders.forEach((order, index) => {
                    const row = document.createElement('tr');
                    row.setAttribute('data-id', userDerivOrders.indexOf(order));
                    row.innerHTML = `
                        <td>${order.date}</td>
                        <td>${order.symbol}</td>
                        <td>${order.transaction}</td>
                        <td>${order.quantity}</td>
                        <td>₹${order.price}</td>
                        <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                        <td>-</td>
                    `;
                    derivOpenOrdersItems.appendChild(row);
                });
            }
            if (historyOrders.length === 0) {
                emptyDerivTradeHistory.style.display = 'block';
            } else {
                emptyDerivTradeHistory.style.display = 'none';
                historyOrders.forEach((order, index) => {
                    const row = document.createElement('tr');
                    row.setAttribute('data-id', userDerivOrders.indexOf(order));
                    row.innerHTML = `
                        <td>${order.date}</td>
                        <td>${order.symbol}</td>
                        <td>${order.transaction}</td>
                        <td>${order.quantity}</td>
                        <td>₹${order.price}</td>
                        <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                        <td>₹${order.charges}</td>
                    `;
                    derivTradeHistoryItems.appendChild(row);
                });
            }
        }
      
        // Update account summary
        function updateAccountSummary() {
            accountBalance.textContent = `₹${userFunds.toFixed(2)}`;
            const totalInvested = [...userPortfolio, ...userPositions].reduce((sum, item) => sum + item.invested, 0);
            investedAmount.textContent = `₹${totalInvested.toFixed(2)}`;
            const totalCurrValue = userPortfolio.reduce((sum, item) => {
                const price = indianStocks.find(s => s.symbol === item.symbol).price;
                return sum + (item.quantity * price);
            }, 0) + userPositions.reduce((sum, item) => {
                const price = derivInstruments.find(d => d.symbol === item.symbol).price;
                return sum + (item.quantity * price);
            }, 0);
            const returns = totalCurrValue - totalInvested;
            totalReturns.textContent = `${returns >= 0 ? '+' : ''}₹${returns.toFixed(2)}`;
            totalReturns.className = returns >= 0 ? 'positive' : 'negative';
        }
      
        // Update withdrawal requests
        function updateWithdrawalRequests() {
            withdrawalItems.innerHTML = '';
            if (withdrawalRequestsList.length === 0) {
                emptyWithdrawals.style.display = 'block';
                withdrawalRequests.style.display = 'none';
            } else {
                emptyWithdrawals.style.display = 'none';
                withdrawalRequests.style.display = 'block';
                const now = new Date();
                withdrawalRequestsList.forEach(request => {
                    if (request.status === 'Pending' && now >= request.completionDate) {
                        request.status = 'Completed';
                    }
                    const item = document.createElement('div');
                    item.className = 'withdrawal-item';
                    const completionTime = request.completionDate.toLocaleString('en-IN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                    item.innerHTML = `
                        <div class="withdrawal-info">
                            <span class="withdrawal-amount">₹${request.amount.toFixed(2)}</span>
                            <span class="withdrawal-date">Requested: ${request.date}</span>
                            <span class="withdrawal-date">Will complete: ${completionTime}</span>
                        </div>
                        <span class="withdrawal-status status-${request.status.toLowerCase()}">${request.status}</span>
                    `;
                    withdrawalItems.appendChild(item);
                });
            }
        }
      
        // Show notification
        function showNotification(message, isSuccess = false, isError = false) {
            const notification = document.createElement('div');
            notification.className = isSuccess ? 'notification success-notification' : (isError ? 'notification error-notification' : 'notification fade-in');
            notification.innerHTML = `
                <i class="fas ${isSuccess ? 'fa-check-circle' : (isError ? 'fa-exclamation-circle' : 'fa-info-circle')}"></i>
                ${message}
            `;
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.classList.add('notification-exit');
                setTimeout(() => {
                    notification.remove();
                }, 400);
            }, 3000);
        }
      
        // Close search results
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });
      
        // Simulate live price updates
        setInterval(() => {
            // Update stocks
            indianStocks.forEach(stock => {
                if (Math.random() > 0.5) {
                    const change = (Math.random() * 10 - 5).toFixed(2);
                    stock.price = parseFloat((stock.price + parseFloat(change)).toFixed(2));
                    stock.change = parseFloat(change);
                    stock.changePercent = parseFloat((change / stock.price * 100).toFixed(2));
                }
            });
            // Update indices
            indices.forEach(index => {
                if (Math.random() > 0.5) {
                    const change = (Math.random() * 200 - 100).toFixed(2);
                    index.spot = parseFloat((index.spot + parseFloat(change)).toFixed(2));
                    index.change = parseFloat(change);
                    index.changePercent = parseFloat((change / index.spot * 100).toFixed(2));
                }
            });
            // Update deriv instruments
            derivInstruments.forEach(d => {
                if (Math.random() > 0.5) {
                    let change;
                    if (d.symbol.endsWith('FUT')) {
                        const base = d.symbol.slice(0, -4);
                        const baseObj = indices.find(i => i.symbol === base) || indianStocks.find(s => s.symbol === base);
                        if (baseObj) {
                            d.price = (baseObj.spot || baseObj.price) + (Math.random() * 2 - 1);
                            d.change = baseObj.change;
                            d.changePercent = baseObj.changePercent;
                        }
                    } else if (d.symbol.endsWith('CE') || d.symbol.endsWith('PE')) {
                        const parts = d.symbol.split('-');
                        const base = parts[0];
                        const strike = parseFloat(parts[1].slice(0, -2));
                        const type = d.symbol.endsWith('CE') ? 'Call' : 'Put';
                        const baseObj = indices.find(i => i.symbol === base) || indianStocks.find(s => s.symbol === base);
                        const spot = baseObj.spot || baseObj.price;
                        const intrinsic = type === 'Call' ? Math.max(0, spot - strike) : Math.max(0, strike - spot);
                        const timeValue = Math.random() * 50;
                        d.price = Math.max(0, intrinsic + timeValue);
                        change = (Math.random() * 10 - 5).toFixed(2);
                        d.change = parseFloat(change);
                        d.changePercent = parseFloat((change / d.price * 100).toFixed(2));
                    } else {
                        change = (Math.random() * 10 - 5).toFixed(2);
                        d.price = parseFloat((d.price + parseFloat(change)).toFixed(2));
                        d.change = parseFloat(change);
                        d.changePercent = parseFloat((change / d.price * 100).toFixed(2));
                    }
                }
            });
            // Update MF NAV slowly (-0.5% to +0.5%)
            mutualFunds.forEach(fund => {
                if (Math.random() > 0.5) {
                    const percentChange = (Math.random() - 0.5);
                    const change = fund.nav * (percentChange / 100);
                    fund.nav = parseFloat((fund.nav + change).toFixed(2));
                }
            });
            updateWatchlistDisplay();
            updatePortfolioDisplay();
            updatePositionsDisplay();
            updateAccountSummary();
            if (currentProduct === 'stocks') updateStockAdditionalSections();
            if (currentProduct === 'derivatives') updateExploreDisplay();
            if (currentProduct === 'mutualfunds') {
                updateMfExploreDisplay();
                updateMfDashboardDisplay();
            }
        }, 2000);
      
        // Deposit/Withdraw functionality
        depositBtn.addEventListener('click', () => {
            depositModal.classList.add('active');
            toggleDepositMethod();
        });
        withdrawBtn.addEventListener('click', () => {
            withdrawModal.classList.add('active');
            toggleWithdrawMethod();
        });
        depositClose.addEventListener('click', () => {
            depositModal.classList.remove('active');
        });
        withdrawClose.addEventListener('click', () => {
            withdrawModal.classList.remove('active');
        });
        depositMethod.addEventListener('change', toggleDepositMethod);
        withdrawMethod.addEventListener('change', toggleWithdrawMethod);
        function toggleDepositMethod() {
            depositQrSection.classList.toggle('active', depositMethod.value === 'QR');
            depositUpiSection.classList.toggle('active', depositMethod.value === 'UPI');
        }
        function toggleWithdrawMethod() {
            withdrawUpiSection.classList.toggle('active', withdrawMethod.value === 'UPI');
            withdrawBankSection.classList.toggle('active', withdrawMethod.value === 'Bank');
        }
        confirmDeposit.addEventListener('click', () => {
            const amount = parseFloat(depositAmount.value);
            if (isNaN(amount) || amount < 100) {
                showNotification('Invalid deposit amount (minimum ₹100)', false, true);
                return;
            }
            // Show fund added animation
            fundAnimationMessage.textContent = "Funds Added";
            fundAnimationDetails.textContent = `₹${amount.toFixed(2)} has been added to your account`;
            fundAnimation.classList.add('active');
            fundProgress.classList.add('progress-animation');
            setTimeout(() => {
                fundAnimation.classList.remove('active');
                fundProgress.classList.remove('progress-animation');
                userFunds += amount;
                updateAccountSummary();
                depositModal.classList.remove('active');
                showNotification(`₹${amount.toFixed(2)} deposited successfully`, true);
                // Create confetti effect
                createConfetti();
            }, 3000);
        });
        confirmWithdraw.addEventListener('click', () => {
            const amount = parseFloat(withdrawAmount.value);
            if (isNaN(amount) || amount < 100) {
                showNotification('Invalid withdrawal amount (minimum ₹100)', false, true);
                return;
            }
            if (amount > userFunds) {
                const shortfall = amount - userFunds;
                showNotification(`Please enter valid amount. Add ₹${shortfall.toFixed(2)} to withdraw`, false, true);
                return;
            }
            // Show withdrawal animation
            withdrawalMessage.textContent = `Withdrawal Order of ₹${amount.toFixed(2)} Placed`;
            // Calculate completion time
            const now = new Date();
            const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
            let completionDate;
            if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
                completionDate = new Date(now);
                completionDate.setHours(18, 0, 0, 0); // 6 PM today
                if (now.getHours() >= 18) {
                    completionDate.setDate(completionDate.getDate() + 1);
                    if (completionDate.getDay() === 6) {
                        completionDate.setDate(completionDate.getDate() + 2);
                    } else if (completionDate.getDay() === 0) {
                        completionDate.setDate(completionDate.getDate() + 1);
                    }
                }
            } else { // Weekend
                const daysUntilMonday = dayOfWeek === 0 ? 1 : 7 - dayOfWeek + 1;
                completionDate = new Date(now);
                completionDate.setDate(completionDate.getDate() + daysUntilMonday);
                completionDate.setHours(18, 0, 0, 0);
            }
            const completionTime = completionDate.toLocaleString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            withdrawalDetails.textContent = `Will be completed on ${completionTime}`;
            withdrawalAnimation.classList.add('active');
            withdrawalProgress.classList.add('progress-animation');
            // Create withdrawal request
            const withdrawalRequest = {
                amount: amount,
                date: now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                completionDate: completionDate,
                status: 'Pending'
            };
            withdrawalRequestsList.push(withdrawalRequest);
            // Deduct funds immediately
            userFunds -= amount;
            updateAccountSummary();
            // Close modal
            withdrawModal.classList.remove('active');
            // Hide animation after 3 seconds
            setTimeout(() => {
                withdrawalAnimation.classList.remove('active');
                withdrawalProgress.classList.remove('progress-animation');
                updateWithdrawalRequests();
                showNotification(`Withdrawal request of ₹${amount.toFixed(2)} placed successfully`, true);
            }, 3000);
        });
      
        // Create confetti effect
        function createConfetti() {
            const colors = ['#3874ff', '#2c5fd9', '#00b894', '#ff6b35', '#2c3e50'];
            const container = document.body;
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animation = `confetti ${Math.random() * 3 + 2}s linear forwards`;
                container.appendChild(confetti);
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

        // Place order button listener (original modal)
        placeOrderBtn.addEventListener('click', function() {
            let symbol = orderSymbol.textContent;
            const transType = orderType.value;
            const prodType = productType.value;
            const variety = orderVariety.value;
            const instrType = instrumentType.value;
            const strike = parseFloat(strikePrice.value);
            const qty = parseInt(quantity.value);
            let price = variety === 'Market' ? parseFloat((indianStocks.find(s => s.symbol === symbol) || derivInstruments.find(d => d.symbol === symbol) || {}).price || limitPrice.value) : parseFloat(limitPrice.value);
            if ((instrType === 'Call' || instrType === 'Put') && !isNaN(strike)) {
                symbol = `${symbol.split('-')[0]}-${strike}${instrType === 'Call' ? 'CE' : 'PE'}`;
            } else if (instrType === 'Future') {
                symbol = `${symbol.split('-')[0]}-FUT`;
            }
            if (isNaN(qty) || qty < 1) {
                showNotification('Invalid quantity', false, true);
                return;
            }
            if (isNaN(price) || price <= 0) {
                showNotification('Invalid price', false, true);
                return;
            }
            if ((instrType === 'Call' || instrType === 'Put') && isNaN(strike)) {
                showNotification('Invalid strike price', false, true);
                return;
            }
            const totalCost = qty * price;
            const positions = currentProduct === 'derivatives' ? userPositions : userPortfolio;
            const orders = currentProduct === 'derivatives' ? userDerivOrders : userOrders;
            const positionItem = positions.find(p => p.symbol === symbol);
            const heldQty = positionItem ? positionItem.quantity : 0;
            if (transType === 'Sell' && qty > heldQty) {
                showNotification('Insufficient quantity to sell', false, true);
                return;
            }
            if (transType === 'Buy' && totalCost > userFunds) {
                const shortfall = totalCost - userFunds;
                showNotification(`Add ₹${shortfall.toFixed(2)} to complete order`, false, true);
                return;
            }
            const newOrder = {
                date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                symbol,
                transaction: transType,
                quantity: qty,
                price: price.toFixed(2),
                status: 'Pending'
            };
            orders.push(newOrder);
            currentProduct === 'derivatives' ? updateDerivOrdersDisplay() : updateOrdersDisplay();
            orderModal.classList.remove('active');
            // Show order placed animation
            orderAnimationMessage.textContent = "Order Placed";
            orderAnimationDetails.textContent = `Order for ${qty} of ${symbol} has been placed successfully`;
            orderAnimation.classList.add('active');
            orderProgress.classList.add('progress-animation');
            setTimeout(() => {
                orderAnimation.classList.remove('active');
                orderProgress.classList.remove('progress-animation');
                showNotification(`Order placed for ${qty} of ${symbol}`, true);
                // Simulate execution
                setTimeout(() => {
                    const turnover = qty * price;
                    const charges = calculateCharges(transType, prodType, turnover);
                    newOrder.charges = charges.toFixed(2);
                    newOrder.status = 'Executed';
                    currentProduct === 'derivatives' ? updateDerivOrdersDisplay() : updateOrdersDisplay();
                    if (transType === 'Buy') {
                        currentProduct === 'derivatives' ? addToPositions(symbol, qty, price, charges) : addToPortfolio(symbol, qty, price, charges);
                        userFunds -= (totalCost + charges);
                    } else if (transType === 'Sell') {
                        currentProduct === 'derivatives' ? sellFromPositions(symbol, qty, price) : sellFromPortfolio(symbol, qty, price);
                        userFunds += (totalCost - charges);
                    }
                    currentProduct === 'derivatives' ? updatePositionsDisplay() : updatePortfolioDisplay();
                    updateAccountSummary();
                    // Show order completed animation
                    orderAnimationMessage.textContent = "Order Completed";
                    orderAnimationDetails.textContent = `Order for ${qty} of ${symbol} has been executed successfully`;
                    orderAnimation.classList.add('active');
                    orderProgress.classList.add('progress-animation');
                    setTimeout(() => {
                        orderAnimation.classList.remove('active');
                        orderProgress.classList.remove('progress-animation');
                        showNotification(`Order for ${symbol} executed`, true);
                    }, 3000);
                }, 2000);
            }, 3000);
        });
    </script>