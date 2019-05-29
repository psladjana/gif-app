import { shallowMount } from '@vue/test-utils';
import GifsList from '@/components/GifsList.vue';

describe('GifsList.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(GifsList);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders props.gifs when passed', () => {
    const gifs = [];
    const wrapper = shallowMount(GifsList, {
      propsData: { gifs },
    });
    expect(wrapper.vm.$props.gifs).toEqual(gifs);
  });
});
