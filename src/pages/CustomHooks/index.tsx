import React from 'react'
import ToggleComponent from '../../components/customHooks/01-useToggle/ToggleComponent'
import TimeoutComponent from '../../components/customHooks/02-useTimeout/TimeoutComponent'
import DebounceComponent from '../../components/customHooks/03-useDebounce/DebounceComponent'
import UpdateEffectComponent from '../../components/customHooks/04-useUpdateEffect/UpdateEffectComponent'
import ArrayComponent from '../../components/customHooks/05-useArray/ArrayComponent'
import PreviousComponent from '../../components/customHooks/06-usePrevious/PreviousComponent'
import StateWithHistoryComponent from '../../components/customHooks/07-useStateWithHistory/StateWithHistoryComponent'
import StorageComponent from '../../components/customHooks/08-useStorage/StorageComponent'
import AsyncComponent from '../../components/customHooks/09-useAsync/AsyncComponent'
import FetchComponent from '../../components/customHooks/10-useFetch/FetchComponent'
import ScriptComponent from '../../components/customHooks/11-useScript/ScriptComponent'
import DeepCompareEffectComponent from '../../components/customHooks/12-useDeepCompareEffect/DeepCompareEffectComponent'
import EventListenerComponent from '../../components/customHooks/13-useEventListener/EventListenerComponent'
import OnScreenComponentComponent from '../../components/customHooks/14-useOnScreen/OnScreenComponent'
import WindowSizeComponent from '../../components/customHooks/15-useWindowSize/WindowSizeComponent'
import MediaQueryComponent from '../../components/customHooks/16-useMediaQuery/MediaQueryComponent'
import GeolocationComponent from '../../components/customHooks/17-useGeolocation/GeolocationComponent'
import StateWithValidationComponent from '../../components/customHooks/18-useStateWithValidation/StateWithValidationComponent'
import SizeComponent from '../../components/customHooks/19-useSize/SizeComponent'
import EffectOnceComponent from '../../components/customHooks/20-useEffectOnce/EffectOnceComponent'
import ClickOutsideComponent from '../../components/customHooks/21-useClickOutside/ClickOutsideComponent'
import DarkModeComponent from '../../components/customHooks/22-useDarkMode/DarkModeComponent'
import CopyToClipboardComponent from '../../components/customHooks/23-useCopyToClipboard/CopyToClipboardComponent'
import CookieComponent from '../../components/customHooks/24-useCookie/CookieComponent'
import TranslationComponent from '../../components/customHooks/25-useTranslation/TranslationComponent'
import OnlineStatusComponent from '../../components/customHooks/26-useOnlineStatus/OnlineStatusComponent'
import RenderCountComponent from '../../components/customHooks/27-useRenderCount/RenderCountComponent'
import DebugInformationComponent from '../../components/customHooks/28-useDebugInformation/DebugInformationComponent'
import HoverComponent from '../../components/customHooks/29-useHover/HoverComponent'
import LongPressComponent from '../../components/customHooks/30-useLongPress.js/LongPressComponent'

const CustomHooks: React.FC = () => {
  return (
    <>
      <b>useToogle</b>
      <ToggleComponent />
      <hr />
      <b>useTimeout</b>
      <TimeoutComponent />
      <hr />
      <b>useDebounce</b>
      <DebounceComponent />
      <hr />
      <b>useUpdateEffect</b>
      <UpdateEffectComponent />
      <hr />
      <b>useArray</b>
      <ArrayComponent />
      <hr />
      <b>usePrevious</b>
      <PreviousComponent />
      <hr />
      <b>useStateWithHistory</b>
      <StateWithHistoryComponent />
      <hr />
      <b>useStorage</b>
      <StorageComponent />
      <hr />
      <b>useAsync</b>
      <AsyncComponent />
      <hr />
      <b>useFetch</b>
      <FetchComponent />
      <hr />
      <b>useScript</b>
      <ScriptComponent />
      <hr />
      <b>useDeepCompareEffect</b>
      <DeepCompareEffectComponent />
      <hr />
      <b>useEventListener</b>
      <EventListenerComponent />
      <hr />
      <b>useOnScreen</b>
      <OnScreenComponentComponent />
      <hr />
      <b>useWindowSize</b>
      <WindowSizeComponent />
      <hr />
      <b>useMediaQuery</b>
      <MediaQueryComponent />
      <hr />
      <b>useGeolocation</b>
      <GeolocationComponent />
      <hr />
      <b>useStateWithValidation</b>
      <StateWithValidationComponent />
      <hr />
      <b>useSize</b>
      <SizeComponent />
      <hr />
      <b>useEffectOnce</b>
      <EffectOnceComponent />
      <hr />
      <b>useClickOutside</b>
      <ClickOutsideComponent />
      <hr />
      <b>useDarkMode</b>
      <DarkModeComponent />
      <hr />
      <b>useCopyToClipboard</b>
      <CopyToClipboardComponent />
      <hr />
      <b>useCookie</b>
      <CookieComponent />
      <hr />
      <b>useTranslation</b>
      <TranslationComponent />
      <hr />
      <b>useOnlineStatus</b>
      <OnlineStatusComponent />
      <hr />
      {/* <b>useRenderCount</b>
      <RenderCountComponent />
      <hr /> */}
      {/* <b>useDebugInformation</b>
      <DebugInformationComponent />
      <hr /> */}
      <b>useHover</b>
      <HoverComponent />
      <hr />
      <b>useLongPress</b>
      <LongPressComponent />
    </>
  )
}

export default CustomHooks
