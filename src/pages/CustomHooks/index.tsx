import React from 'react'
import ToggleComponent from '../../customHooks/01-useToggle/ToggleComponent'
import TimeoutComponent from '../../customHooks/02-useTimeout/TimeoutComponent'
import DebounceComponent from '../../customHooks/03-useDebounce/DebounceComponent'
import UpdateEffectComponent from '../../customHooks/04-useUpdateEffect/UpdateEffectComponent'
import ArrayComponent from '../../customHooks/05-useArray/ArrayComponent'
import PreviousComponent from '../../customHooks/06-usePrevious/PreviousComponent'
import StateWithHistoryComponent from '../../customHooks/07-useStateWithHistory/StateWithHistoryComponent'
import StorageComponent from '../../customHooks/08-useStorage/StorageComponent'
import AsyncComponent from '../../customHooks/09-useAsync/AsyncComponent'
import FetchComponent from '../../customHooks/10-useFetch/FetchComponent'
import ScriptComponent from '../../customHooks/11-useScript/ScriptComponent'
import DeepCompareEffectComponent from '../../customHooks/12-useDeepCompareEffect/DeepCompareEffectComponent'
import EventListenerComponent from '../../customHooks/13-useEventListener/EventListenerComponent'
import OnScreenComponentComponent from '../../customHooks/14-useOnScreen/OnScreenComponent'
import WindowSizeComponent from '../../customHooks/15-useWindowSize/WindowSizeComponent'
import MediaQueryComponent from '../../customHooks/16-useMediaQuery/MediaQueryComponent'
import GeolocationComponent from '../../customHooks/17-useGeolocation/GeolocationComponent'
import StateWithValidationComponent from '../../customHooks/18-useStateWithValidation/StateWithValidationComponent'
import SizeComponent from '../../customHooks/19-useSize/SizeComponent'
import EffectOnceComponent from '../../customHooks/20-useEffectOnce/EffectOnceComponent'
import ClickOutsideComponent from '../../customHooks/21-useClickOutside/ClickOutsideComponent'
import DarkModeComponent from '../../customHooks/22-useDarkMode/DarkModeComponent'
import CopyToClipboardComponent from '../../customHooks/23-useCopyToClipboard/CopyToClipboardComponent'
import CookieComponent from '../../customHooks/24-useCookie/CookieComponent'
import TranslationComponent from '../../customHooks/25-useTranslation/TranslationComponent'
import OnlineStatusComponent from '../../customHooks/26-useOnlineStatus/OnlineStatusComponent'
import RenderCountComponent from '../../customHooks/27-useRenderCount/RenderCountComponent'
import DebugInformationComponent from '../../customHooks/28-useDebugInformation/DebugInformationComponent'
import HoverComponent from '../../customHooks/29-useHover/HoverComponent'
import LongPressComponent from '../../customHooks/30-useLongPress.js/LongPressComponent'

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
