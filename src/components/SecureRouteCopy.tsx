/*!
 * Copyright (c) 2017-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React from 'react';
import {Outlet} from "react-router-dom";
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import Loading from "./Loading";

export const RequiredAuth = ({ children }: any) => {
  const { oktaAuth, authState, _onAuthRequired } = useOktaAuth();
  const pendingLogin = React.useRef(false);

  React.useEffect(() => {
    const handleLogin = async () => {
      if (pendingLogin.current) {
        return;
      }

      pendingLogin.current = true;

      const originalUri = toRelativeUrl(
          window.location.href,
          window.location.origin
      );
      oktaAuth.setOriginalUri(originalUri);
      if (_onAuthRequired) {
        await _onAuthRequired(oktaAuth);
      } else {
        await oktaAuth.signInWithRedirect();
      }
    };

    if (!authState) {
      return;
    }

    if (authState.isAuthenticated) {
      pendingLogin.current = false;
      return;
    }

    if (!authState.isAuthenticated) {
      handleLogin();
    }
  }, [authState, oktaAuth, _onAuthRequired]);

  if (!authState || !authState.isAuthenticated) {
    return (<Loading />);
  }

  return (<Outlet />);
}
