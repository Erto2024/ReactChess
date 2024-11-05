import { Status } from "../../constant"
import { useAppContext } from "../../contexts/context"
import { ClosePopup } from "../../reducer/actions/popup"
import "./Popup.css"
import PromotionBox from "./PromotionBox/PromotionBox"


const Popup = () => {

  const {appState,dispatch} = useAppContext()
  
  if(appState.status === Status.ongoing)
    return null

  const onClosePopup = () => {
    dispatch(ClosePopup)
  }
  
  return<div className="popup" >
    <PromotionBox onClosePopup={onClosePopup}/>
  </div>
}
export default Popup