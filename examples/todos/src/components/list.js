import {bindActionCreators} from 'redux';

import * as todosActionCreators from '../actions/todos';
import {link} from '../../../../dist/bundle';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const List = {
  name: 'List',
  props: ['todos', 'actions'],
  render(h) {
    return (
      <div style={styles.container}>
        <input
          type='button'
          value='add'
          onClick={() => this.actions.addTodo({text: 'Another', completed: false})}
        />
        {this.todos.map((todo, key) => <span key={key}>{todo.text}</span>)}
      </div>
    );
  },
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todosActionCreators, dispatch),
});

const mapStateToProps = state => ({
  todos: state.todos,
});

export default link(mapDispatchToProps, mapStateToProps, List);