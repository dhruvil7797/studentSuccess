import 'react-native';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import 'react-navigation';

import Login from '../Views/CateogoryPages/Login'
import Dashboard from '../Views/CateogoryPages/dashboard'
import MyLearning from '../Views/CateogoryPages/MyLearning'
import MyWellness from '../Views/CateogoryPages/MyLearning'
import MyCareer from '../Views/CateogoryPages/MyCareer'
import YourAdvisor from '../Views/CateogoryPages/YourAdvisor'

import CareerAdvisor from '../Views/myCareer/CareerAdvice'
import CareerEvents from '../Views/myCareer/CareerEvents'
import ContactCareer from '../Views/myCareer/Contact'
import JobSearch from '../Views/myCareer/JobSearch'

import AcademicTesting from '../Views/myLearning/AcademicTesting'
import ContactLearning from '../Views/myLearning/Contact'
import RelatedService from '../Views/myLearning/RelatedService'
import ServiceAndSupport from '../Views/myLearning/ServiceAndSupport'
import Transition from '../Views/myLearning/Transition'
import Tutoring from '../Views/myLearning/Tutoring'

import Contact from '../Views/myWellness/Contact'
import MentalHealth from '../Views/myWellness/MentalHealth'
import MedicalCare from '../Views/myWellness/Medical_Care'
import Counselling from '../Views/myWellness/Counselling'
import HealthInsurance from '../Views/myWellness/HealthInsurance'
import RelatedServicesWellness from '../Views/myWellness/Related_service'
import HelpStudent from '../Views/myWellness/Help_Student'
import '@react-navigation/stack';



it('Rendering Login Screen', ()=>{
    renderer.create( <Login />, { disableLifecycleMethods: true })
});

it('Rendering Dashboard Screen', ()=>{
    renderer.create( <Dashboard />, { disableLifecycleMethods: true })
});

it('Rendering MyLearning Category Screen', ()=>{
    renderer.create( <MyLearning />, { disableLifecycleMethods: true })
});

it('Rendering MyWellness Category Screen', ()=>{
    renderer.create( <MyWellness />, { disableLifecycleMethods: true })
});

it('Rendering MyCareer Category Screen', ()=>{
    renderer.create( <MyCareer />, { disableLifecycleMethods: true })
});

it('Rendering YourAdvisor Category Screen', ()=>{
    renderer.create( <YourAdvisor />, { disableLifecycleMethods: true })
});

it('Rendering Career Advisor Service Screen', ()=>{
    renderer.create( <CareerAdvisor />, { disableLifecycleMethods: true })
});

it('Rendering Career Events Service Screen', ()=>{
    renderer.create( <CareerEvents />, { disableLifecycleMethods: true })
});

it('Rendering Career Contact Service Screen', ()=>{
    renderer.create( <ContactCareer />, { disableLifecycleMethods: true })
});

it('Rendering Job Search Service Screen', ()=>{
    renderer.create( <JobSearch />, { disableLifecycleMethods: true })
});

it('Rendering Mental Health Service Screen', ()=>{    
    renderer.create( <MentalHealth />, { disableLifecycleMethods: true })
});

it('Rendering Academic Testing Service Screen', ()=>{
    renderer.create( <AcademicTesting />, { disableLifecycleMethods: true })
});

it('Rendering Contact Learning Service Screen', ()=>{
    renderer.create( <ContactLearning />, { disableLifecycleMethods: true })
});

it('Rendering Related Services Screen', ()=>{
    renderer.create( <RelatedService />, { disableLifecycleMethods: true })
});

it('Rendering Service and Support Screen', ()=>{
    renderer.create( <ServiceAndSupport />, { disableLifecycleMethods: true })
});

it('Rendering Learning Transition Service Screen', ()=>{
    renderer.create( <Transition />, { disableLifecycleMethods: true })
});

it('Rendering Tutoring Service Screen', ()=>{
    renderer.create( <Tutoring />, { disableLifecycleMethods: true })
});

it('Rendering MyWellness Contact Service Screen', ()=>{
    renderer.create( <Contact />, { disableLifecycleMethods: true })
});



it('Rendering Medical Care Service Screen', ()=>{
    renderer.create( <MedicalCare />, { disableLifecycleMethods: true })
});

it('Rendering Counselling Service Screen', ()=>{
    renderer.create( <Counselling />, { disableLifecycleMethods: true })
});

it('Rendering Health Insurance Service Screen', ()=>{
    renderer.create( <HealthInsurance />, { disableLifecycleMethods: true })
});

it('Rendering Related Service MyWellness Screen', ()=>{
    renderer.create( <RelatedServicesWellness />, { disableLifecycleMethods: true })
});

it('Rendering Help Student Service Screen', ()=>{
    renderer.create( <HelpStudent />, { disableLifecycleMethods: true })
});
