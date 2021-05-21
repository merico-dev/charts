# 1. Charts

CE&EE -> Charts -> Recharts/AntDesignCharts/...

Charts provides unified charting data structure, UX, APIs.

Theme & palette will be customizable via API

# 2. How to use in development
```
$ yarn install
$ yarn storybook
```

# 3. How to use in production
## 3.1. peer dependencies
Do notice the `peerDependencies` part in `package.json`.

## 3.2. npm package

**in package.json**
```json
"charts": "git+https://github.com/merico-dev/charts.git"
```

**in code**
```javascript
import { SingleSeriesLineChart } from 'charts';
```

## 3.3. git submodule
**in package.json**
```json
"charts": "file:./packages/charts",
```

**git submodule**
```
mkdir packages
git submodule update --remote -- packages/charts && npm install
```

# 4. Available Charts
 - MultipleSeriesLineChart
 - SingleSeriesLineChart
 - RechartsBarChart
 - BoxPlotChart
 - QuadrantChart
 - RadarChart
