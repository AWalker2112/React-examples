import data from '../static/Photos.json'
import SingleContactCard from './SingleContactCard';

    const DataFactory = () => {
        return (
            data.map((item)=>(
                <SingleContactCard key={item.id} item={item}
                   

                />
            )
            
                

            
        ))
    }

    export default DataFactory;