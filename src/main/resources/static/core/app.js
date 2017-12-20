var Employee = React.createClass({

  getInitialState: function() {
    return {display: true };
  },
  handleDelete() {
    var self = this;
    $.ajax({
        url: self.props.employee._links.self.href,
        type: 'DELETE',
        success: function(result) {
          self.setState({display: false});
        },
        error: function(xhr, ajaxOptions, thrownError) {
          toastr.error(xhr.responseJSON.message);
        }
    });
  },
  render: function() {

    if (this.state.display==false) return null;
    else return (
      <tr>
          <td>{this.props.employee.name}</td>
          <td>{this.props.employee.age}</td>
          <td>{this.props.employee.years}</td>
          <td>
            <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
          </td>
      </tr>
    );
  }
});

var EmployeeTable = React.createClass({

  render: function() {

    var rows = [];
    this.props.employees.forEach(function(employee) {
      rows.push(
        <Employee employee={employee} key={employee.name} />);
    });

    return (
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Years</th>
                  <th>Delete</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
      </table>
    );
  }
});

var App = React.createClass({

  loadEmployeesFromServer: function() {

    var self = this;
    $.ajax({
        url: "http://127.0.0.1:8080/greeting",
      }).then(function(data) {
    	  $('.greeting-id').append(data[0].name);
          $('.greeting-content').append(data[0].age);
          self.setState({ employees: data});
      });

  },

  getInitialState: function() {
    return { employees: [] };
  },

  componentDidMount: function() {
    this.loadEmployeesFromServer();
  },

  render() {
    return ( <EmployeeTable employees={this.state.employees} /> );
  }
});

ReactDOM.render(<App />, document.getElementById('root') );
