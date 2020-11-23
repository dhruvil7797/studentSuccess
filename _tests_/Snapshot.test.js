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



it('Snapshot testing of Login Screen', ()=>{
    const compo = renderer.create( <Login />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Dashboard Screen', ()=>{
    const compo = renderer.create( <Dashboard />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering MyLearning Category Screen', ()=>{
    const compo = renderer.create( <MyLearning />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering MyWellness Category Screen', ()=>{
    const compo = renderer.create( <MyWellness />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering MyCareer Category Screen', ()=>{
    const compo = renderer.create( <MyCareer />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering YourAdvisor Category Screen', ()=>{
    const compo = renderer.create( <YourAdvisor />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Career Advisor Service Screen', ()=>{
    const compo = renderer.create( <CareerAdvisor />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Career Events Service Screen', ()=>{
    const compo = renderer.create( <CareerEvents />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Career Contact Service Screen', ()=>{
    const compo = renderer.create( <ContactCareer />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Job Search Service Screen', ()=>{
    const compo = renderer.create( <JobSearch />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Mental Health Service Screen', ()=>{    
    const compo = renderer.create( <MentalHealth />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Academic Testing Service Screen', ()=>{
    const compo = renderer.create( <AcademicTesting />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Contact Learning Service Screen', ()=>{
    const compo = renderer.create( <ContactLearning />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Related Services Screen', ()=>{
    const compo = renderer.create( <RelatedService />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Service and Support Screen', ()=>{
    const compo = renderer.create( <ServiceAndSupport />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Learning Transition Service Screen', ()=>{
    const compo = renderer.create( <Transition />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Tutoring Service Screen', ()=>{
    const compo = renderer.create( <Tutoring />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering MyWellness Contact Service Screen', ()=>{
    const compo = renderer.create( <Contact />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});



it('Snapshot testing of Rendering Medical Care Service Screen', ()=>{
    const compo = renderer.create( <MedicalCare />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Counselling Service Screen', ()=>{
    const compo = renderer.create( <Counselling />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Health Insurance Service Screen', ()=>{
    const compo = renderer.create( <HealthInsurance />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Related Service MyWellness Screen', ()=>{
    const compo = renderer.create( <RelatedServicesWellness />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});

it('Snapshot testing of Rendering Help Student Service Screen', ()=>{
    const compo = renderer.create( <HelpStudent />, { disableLifecycleMethods: true });
    expect(compo).toMatchSnapshot();
});
