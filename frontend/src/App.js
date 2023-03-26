import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout';
import {Provider} from 'react-redux';
import store from './store';
import About from './components/About';
import RegisterNGO from './containers/RegisterNGO';
import LoginRecommendation from './containers/LoginRecommendation';
import LoginDonation from './containers/LoginDonation';
import LoginOrganization from './containers/LoginOrganization';
import Recommendation from './components/Recommendation';
import RecommendedFood from './components/RecommendedFood';
import Organization from './components/Organization';
import RecommendedFoodForMood from './components/RecommendedFoodForMood';
import DailySuggestions from './components/DailySuggestions';
import Home from './components/Home';
import Suggestions from './components/Suggestions';

const App=() => (
    <Provider store={store}>
    <Router>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/loginRecommendation' element={<LoginRecommendation/>} />
                <Route exact path='/loginDonation' element={<LoginDonation/>} />
                <Route exact path='/loginOrganization' element={<LoginOrganization/>} />
                <Route exact path='/signup' element={<Signup/>} />
                <Route exact path='/suggestions' element={<Suggestions />} />
                <Route exact path='/registerNGO' element={<RegisterNGO/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
                <Route exact path='/activate/:uid/:token/' element={<Activate/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='recommendation/:email' element={<Recommendation/>} />
                <Route exact path='/recommended_food' element={<RecommendedFood/>} />
                <Route exact path='/recommended_food_for_mood' element={<RecommendedFoodForMood/>} />
                <Route exact path='/dailySuggestions' element={<DailySuggestions />} />
                <Route exact path='/organization' element={<Organization/>} />
            </Routes>
            </Layout>
    </Router>
    </Provider>
);
export default App;