type Props = {
  article?: [
    article: {
      anthor: string;
      title: string;
      publishhedAt: string;
      url: string;
      urlToImage: string;
    }
  ];
  title?: string;
  weatherNews?: {
    current: {
      temp: number;
      clouds: number;
      weather: [
        conditions: {
          main: string;
          icon: string;
        }
      ];
    };
    daily: [
      data: {
        dt: number;
        clouds: number;
        temp: {
          min: number;
          max: number;
        };
        weather: [
          conditions: {
            id: number;
            icon: string;
          }
        ];
      }
    ];
  };
};

export default Props;
