const React = require('react');
const Layout = require('../Layout');

function Register() {
  return (
    <Layout>
      <div className="registration">
        <form method="POST" action="/auth/register">
          <div className="username">
            <label htmlFor="title-input" className="block mar-b-1">Username</label>
            <input type="text" name="username" className="block w-100 no-outline no-border pad-1 mar-b-2" />
          </div>
          <div className="email">
            <label htmlFor="title-input" className="block mar-b-1">Email</label>
            <input type="text" name="email" className="block w-100 no-outline no-border pad-1 mar-b-2" />
          </div>
          <div className="password">
            <label htmlFor="title-input" className="block mar-b-1">Password</label>
            <input type="text" name="password" className="block w-100 no-outline no-border pad-1 mar-b-2" />
          </div>
          <button type="submit" className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline">Create Account</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Register;
