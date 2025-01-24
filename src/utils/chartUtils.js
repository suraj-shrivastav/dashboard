export const processChartData = (data) => {
    return data.map(item => ({
      time: new Date(item.timestamp).toLocaleTimeString(),
      count: item.count
    }));
  };
  
  export const getColorScheme = (index) => {
    const colors = ['#8884d8', '#82ca9d', '#ff7300', '#0088fe'];
    return colors[index % colors.length];
  };