import { Container,Icon,LeftFilter,RightFilter } from "./style";
import { easyToFind,map } from '../../../utils/icons'
import { useState } from 'react'
import { storeViewDisplayPreferences } from '../../../store/modules/viewDisplayPreference/actions' 
import { useDispatch } from 'react-redux'


const ViewOptions = ({ props }) => {

    const dispatch = useDispatch()

    const [Selected, setSelected] = useState('list')
    
    const selectMapView = () => {
        if(Selected === 'list'){
            setSelected('map')
            dispatch(storeViewDisplayPreferences({selectedView:'map'}))
        } else {
            return
        }
    }

    const selectListView = () => {
        if(Selected === 'map'){
            setSelected('list')
            dispatch(storeViewDisplayPreferences({selectedView:'list'}))
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
