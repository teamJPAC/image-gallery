import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../App.js';
import TopNav from '../components/Nav/TopNav.js';
import NavToolbar from '../components/Nav/NavToolbar.js';
import DropDowns from '../components/Nav/DropDowns.js'
// test('playPiece should return the correct column number of the click location', () => {
//   const instance = wrapper.instance();
//   jest.spyOn(instance, 'playPiece').mockImplementation(() => {
//   wrapper.find('#spot22').simulate('click');
//   expect(instance.playPiece).toHaveBeenCalledWith(1);
//   });
//   }); 
const willMount = async(ComponentClass) => {
  const lifecycleMethod = jest.spyOn(ComponentClass.prototype, 'componentDidMount');
  const wrapper = shallow(<ComponentClass  />);
  await lifecycleMethod.returnValues;

  lifecycleMethod.restore();
  return wrapper.update();
}
console.log('string')
describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('it should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });
  
  test('should contain the necessary components', async () => {
    // const wrapper = mount(<App />)
    // await wrapper.instance()
    // console.log('msg', wrapper.find('TopNav').prop())
    const wrapper = await willMount(App);
    wrapper.update().find('TopNav')
    expect(wrapper.update().find('TopNav').length).toBe(1)
    expect(wrapper.find('#loading-page').length).toBe(1);
  })
});



// describe('TopNav', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<TopNav />)
//   });

//   test('should contain two main section that contains the necessary number of headers: ', () => {
//       // expect(wrapper.find('#nav-top-main-right').length).toBe(1);
//       expect(wrapper.find(DropDowns).length).toBe(6);
//     })

//   test('', () => {
//     wrapper.find(DropDowns).simulate("click");
//     wrapper.update();
//     expect(wrapper.find(DropDowns).length).toBe(6);
//   })
// })


// describe('Toolbar', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<NavToolbar />)
//   });

//   test('should contain two main section that contains the necessary number of headers: ', () => {
//     (async () => {
//       await flushPromises();
//       wrapper.update();
//       expect(wrapper.find('.Nav-top-bar-header').length).toBe(10);
//       expect(wrapper.find('nav-top-main-right').length).toBe(10);
//     })();
//   });

// })