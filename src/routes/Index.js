import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteRestriction } from "./route-restriction";
import { private_routes, public_routes, public_private_routes } from './layoutRoutes';
import {path as pages_path} from "./path";
import { isDeveloper as Developer, userData } from "../Config/sessionKeys";
import Error400 from "../pages/Error400";
import siteConfig from "../Config/siteConfig";
import {config} from "../Config/baseConfig";
import Maintenance from "../pages/Maintanance";
import CustomPageLoader from "../Components/CustomPageLoader/Index";

const MainRoutes = () => {
    const maintenance = config.maintenance;
    const isDeveloper = localStorage.getItem(Developer)
    const jwt_token = JSON.parse(localStorage.getItem(userData));

    // Favicon icon set...
    useEffect(() => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = siteConfig.company_favicon;
        
    }, []);

    return maintenance && isDeveloper !== 'true' ? (
        <Maintenance />
    ) : (
        <>
            <Routes>
                <Route exact path='/' element={<RouteRestriction type="both" />}>
                    {public_private_routes.map(({ path, Component, Layout }, i) => (
                        <Route element={Layout} key={i}>
                            <Route exact path={path} element={<Suspense fallback={<CustomPageLoader default />}>{Component}</Suspense>} />
                        </Route>
                    ))}
                </Route>
                <Route exact path='/' element={<RouteRestriction type="private" />}>
                    {private_routes.map(({ path, Component, Layout }, i) => (
                        <Route element={Layout} key={i}>
                            {/* {jwt_token ? <Route exact
                                path={`/`}
                                element={<Navigate
                                    to={`${pages_path.home}`} />}
                            /> : */}
                            <Route exact path={path}
                                element={<Suspense fallback={<CustomPageLoader default={true} />}>{Component}</Suspense>}
                            />
                        </Route>
                    ))}
                </Route>

                <Route exact path='/' element={<RouteRestriction type="public" />}>
                    {public_routes.map(({ path, Component, Layout }, i) => (
                        <Route element={Layout} key={i}>
                            <Route exact path={path} element={<Suspense fallback={<CustomPageLoader default />}>{Component}</Suspense>} />
                        </Route>
                    ))}
                </Route>

                
                <Route path={`${pages_path.error400}`} element={<Error400 pageTitle="Error" />} />
                <Route path="*" element={<Error400 pageTitle="Error" />} /> {/* wrong route redirects to 404 page */}
            </Routes>
        </>
    );


};

export default MainRoutes;
