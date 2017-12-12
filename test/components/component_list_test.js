import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {
  let component;

  beforeEach(() => {
    const props = { comments: [ 'comment 1', 'comment 2' ] };
    component = renderComponent(CommentList, null, props);    
  })
  
  it('has the correct class', () => {
    expect(component).to.have.class('comment-list');
  })

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  })

  it('shows an each comment that is provided', () => {
    expect(component).to.contain('comment 1');    
    expect(component).to.contain('comment 2');    
  })
})

