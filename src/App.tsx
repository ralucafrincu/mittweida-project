import {Fragment} from "react";
import {Route, Switch} from "wouter";
import WelcomePage from "./pages/WelcomePage/WelcomePage.tsx";
import HoursPage from "./pages/HoursPage/HoursPage.tsx";
import GeneratedRoutePage from "./pages/GeneratedRoutePage/GeneratedRoutePage.tsx";
import MapPage from "./pages/MapPage/MapPage.tsx";
import PhotoMissionPage from "./pages/PhotoMissionPage/PhotoMissionPage.tsx";
import AddStopPage from "./pages/AddStopPage/AddStopPage.tsx";
import StopMapPage from "./pages/StopMapPage/StopMapPage.tsx";
import {CameraPage} from "./pages/CameraPage/CameraPage.tsx";
import UploadPhotoPage from "./pages/UploadPhotoPage/UploadPhotoPage.tsx";
import AddedPhotoPage from "./pages/AddedPhotoPage/AddedPhotoPage.tsx";
import ProgressTrackerPage from "./pages/ProgressTrackerPage/ProgressTrackerPage.tsx";
import SimpleMapPage from "./pages/SimpleMapPage/SimpleMapPage.tsx";

export default function App() {

  return (
      <Fragment>
          <Switch>
              <Route path={"/"} component={WelcomePage}/>
              <Route path={"/welcome"} component={WelcomePage}/>
              <Route path={"/hours"} component={HoursPage}/>
              <Route path={"/generated-route/:hour"} component={GeneratedRoutePage}/>
              <Route path={"/map/:hour"} component={MapPage}/>
              <Route path={"/photo-mission/:hour"} component={PhotoMissionPage}/>
              <Route path={"/add-stop/:hour"} component={AddStopPage}/>
              <Route path={"/routing/:name/:lat/:lon/:hour"} component={StopMapPage}/>
              <Route path={"/camera/:hour"} component={CameraPage}/>
              <Route path={"/upload-photo/:hour"} component={UploadPhotoPage}/>
              <Route path={"/added/:hour"} component={AddedPhotoPage}/>
              <Route path={"/progress-tracker/:hour"} component={ProgressTrackerPage}/>
              <Route path={"/simple-map"} component={SimpleMapPage}/>

              <Route>404: Path not found!</Route>
          </Switch>
      </Fragment>
  )
}


