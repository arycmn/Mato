import { Container,Icon,LeftFilter,RightFilter } from "./style";
import { easyToFind,map } from '../../../icons'
import { useState } from 'react'

const ViewOptions = ({ props }) => {

    const [Selected, setSelected] = useState('list')
    
    const selectMapView = () => {
        if(Selected === 'list'){
            setSelected('map')
        } else {
            return
        }
    }

    const selectListView = () => {
        if(Selected === 'map'){
            setSelected('list')
        } else {
            return
        }
    }

  return (
    <Container>
        <LeftFilter 
            onClick={selectMapView} 
            hide={Selected === 'list' ? true : false}
        >
            <Icon src={map}></Icon>
        </LeftFilter>
        <RightFilter 
            onClick={selectListView} 
            hide={Selected === 'map' ? true : false}
        >
            <Icon src={easyToFind}></Icon>
        </RightFilter>
    </Container>
  );
};

export default ViewOptions;
