import React from 'react';
import Loading from './Loading'
import CovidMap from './CovidMap';
import Legend from './Legend'
import LoadCountriesTask from '../tasks/LoadCountriesTask'
import legendItems from '../entities/LegendItems'

/*const Covid19 = () => {
    const [countries, setCountries] = useState([]);
    const load = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(countries);
    }

    useEffect(load,[]);

    return (<div>

       {countries.length === 0 ? (
       <Loading/>
       ) : (
       <div>
          <CovidMap/>
           <Legend/>
        </div>
        )}
    </div>
    );
   
    
}
 
export default Covid19;*/
// const legendItemsReverse = [...legendItems].reverse();
class Covid19 extends React.Component {
   
    state = {
      countries: [],
    };
    loadCountriesTask = new LoadCountriesTask();
    componentDidMount() {
      this.loadCountriesTask.load((countries) => this.setState({ countries }));
    }
    render() {
      const { countries } = this.state;
      return (
        <div>
          {countries.length === 0 ? (
            <Loading />
          ) : (
            <div>
              <CovidMap countries={countries} />
              <Legend legendItems={legendItems} />
            </div>
          )}
        </div>
      );
    }
  }
  export default Covid19;