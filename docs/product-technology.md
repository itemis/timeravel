# handling of refresh tokens by google javascript api
- how to refresh a token with google api ?
	- https://developers.google.com/api-client-library/javascript/help/faq, https://developers.google.com/api-client-library/javascript/help/faq
		- explict method call
	- https://stackoverflow.com/questions/24454137/how-to-get-refresh-token-while-using-google-api-js-client
		- for the oauth workflow initiated for use with client applications no refresh token is issued. Google does not support this in this case
	- Refresh tokens are not typically used in client-side (JavaScript) web applications. (https://developers.google.com/identity/protocols/OAuth2WebServer#offline)

# storage of refresh tokens javascript/angular
- main idea: store as secure cookie by using synchronized token patterns
- https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage
- http://www.baeldung.com/spring-security-oauth2-refresh-token-angular-js
# openconnect id vs google oauth libraries for access to google functionality
- instead of explicit api to ca
	
# useful links

https://en.wikipedia.org/wiki/OpenID
https://github.com/test-editor/test-editor-web
https://developers.google.com/actions/identity/oauth2-code-flow
https://stackoverflow.com/questions/32150845/how-to-refresh-expired-google-sign-in-logins
https://developers.google.com/identity/protocols/OAuth2UserAgent
https://stackoverflow.com/questions/10827920/not-receiving-google-oauth-refresh-token
https://developers.google.com/identity/protocols/OAuth2WebServer#exchange-authorization-code
https://developers.google.com/identity/protocols/OAuth2WebServer#formingtheurl
https://myaccount.google.com/u/1/security?pli=1
https://stackoverflow.com/questions/8942340/get-refresh-token-google-api
https://stackoverflow.com/questions/10827920/not-receiving-google-oauth-refresh-token/10857806#10857806
https://stackoverflow.com/questions/32902734/how-to-make-google-sign-in-token-valid-for-longer-than-1-hour
https://github.com/google/google-api-javascript-client/issues/234
https://translate.google.de/#auto/en/http%3A%2F%2Flocalhost%3A4200
https://www.google.de/search?client=firefox-b-ab&dcr=0&ei=f5EJWrOEBYKxkwXw-4KwCg&q=auth2+token+refresh&oq=auth2+token+refresh&gs_l=psy-ab.3...5150.8469.0.8899.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.JrWp3IG9fwI
https://auth0.com/learn/refresh-tokens/
https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/
https://knpuniversity.com/screencast/oauth/refresh-token
https://knpuniversity.com/tracks/extras#programming-snacks
https://developers.google.com/identity/protocols/OAuth2WebServer#offline
https://developers.google.com/identity/protocols/OAuth2
https://en.wikipedia.org/wiki/Confused_deputy_problem
https://github.com/damienbod/angular-auth-oidc-client
https://developers.google.com/oauthplayground/
http://cakebaker.42dh.com/2008/04/01/openid-versus-oauth-from-the-users-perspective/
https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage
https://stackoverflow.com/questions/23366678/angularjs-handling-refresh-token
http://www.baeldung.com/spring-security-oauth2-refresh-token-angular-js
https://stormpath.com/blog/token-auth-spa
https://auth0.com/docs/tokens/access-token
https://developers.google.com/identity/sign-in/web/reference#gapiauth2authorizeparams-callback
https://developers.google.com/api-client-library/javascript/help/faq
https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2initparams
https://developers.google.com/google-apps/calendar/quickstart/js#further_reading
https://console.developers.google.com/apis/api/calendar-json.googleapis.com/overview?project=timeravel-frontend&authuser=1&duration=PT1H
https://www.google.de/search?q=google+javascript+refresh+token&ie=utf-8&oe=utf-8&client=firefox-b-ab&gfe_rd=cr&dcr=0&ei=ZLcJWpyOEeLM8gfegaHoAQ
https://stackoverflow.com/questions/24454137/how-to-get-refresh-token-while-using-google-api-js-client
https://developers.google.com/api-client-library/javascript/help/faq
https://github.com/google/google-api-javascript-client/issues/279
https://www.google.de/search?q=openid+connect+vs+oauth2&ie=utf-8&oe=utf-8&client=firefox-b-ab&gfe_rd=cr&dcr=0&ei=obwJWtOWEvPM8gfKor3ABQ
https://security.stackexchange.com/questions/44611/difference-between-oauth-openid-and-openid-connect-in-very-simple-term
https://oauth.net/articles/authentication/
	
from what i get until now it seems like for google oauth and openid connect are the same as Google's OAuth 2.0 APIs can be used for both authentication and authorization


# Questions

- is there a rest API to use by google that would allow us to generically issue requests ?
- do we expect the authentication mechanism (google) we are using currently to change ?
- what do we want to do ?
	- access the account of a user and his data
	- authenticate the user
	- ask for authorization for portions of the user account only incrementally
- how ?
	- we need to define our APIS and our expectations
		- authentication module (may be simply according to oauth or keep it generic ?)
			- app authentication service/API
			- authentication service/API
		- data metamodel
			- unclear at this stage what our needs are. Probably for now:
			- Calendar
			- Cloud file storage
			- For both the calendar and the cloudl file storage we still don't know exactly which part of the functionality is needed. 
			- Model For time tracking
				- Task
				- Time Entry
					- Start
					- End
				- Task <-> Time Entry
				- etc.
	- Concrete implementation
		- Currently, we are highly dependant on google accounts/login. Accordingly we need an implementation that enables:
			- Access to google calendar
			- Google Login
		- The two requirements above imply the ability to access the google calendar API and the login API from the frontend implementation.
			- Questions implied
				- can we use different libraries for the login to google and other ones for accessing the calendar ?
				- what kind of access is possible to google services from a web frontend. 