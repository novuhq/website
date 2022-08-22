import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

import Hero from 'components/pages/blog-post/hero';
import Layout from 'components/shared/layout';

const Register = () => {
  const [sent, setSent] = useState(0);
  const { values, handleSubmit, handleBlur, handleChange } = useFormik({
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    }),
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: () => {
      axios.post('/api/submit', values);
      setSent(1);
    },
  });

  if (sent === 1) {
    return (
      <p style={{ color: 'red' }}>
        Thank you for registering. We have sent you a calendar invitation.
      </p>
    );
  }
  return (
    <>
      <p>
        <strong>Feel free to register here:</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          style={{ padding: 10, borderRadius: 10 }}
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          name="email"
          style={{ padding: 10, borderRadius: 10, marginLeft: 10 }}
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button
          style={{
            cursor: 'pointer',
            background: '#B70673',
            padding: 10,
            borderRadius: 10,
            marginLeft: 10,
          }}
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};
const LiveEvent = () => {
  const SEO = {
    title: 'Novu - Live Event',
    description:
      'The ultimate library for managing multi-channel transactional notifications with a single API.',
    slug: '/live-event/',
    ogImage: 'https://novu.co/images/social-preview.jpg',
  };

  return (
    <Layout seo={SEO}>
      <article className="safe-paddings pt-40 sm:pt-28">
        <div className="container-sm relative">
          <Hero
            title="Join Novu Live Event 🚀"
            description={
              <div className="content">
                <p>
                  <strong>Event Date:</strong> 24 August, 2022 at (4PM UTC TIME, 12PM EST, 9AM PST)
                </p>
                <p>
                  We are super excited to release <strong>Novu v0.7.0.</strong>
                </p>
                <p>
                  Just a quick background about us. Novu is the first open-source notification
                  infrastructure. We basically help to manage all the product notifications. It can
                  be In-App (the bell icon like you have in Facebook - Websockets), Emails, SMSs and
                  so on.
                </p>
                <p>In this event, we will talk about:</p>
                <ul style={{ marginBottom: 10 }}>
                  <li>
                    Novu new features:
                    <ul>
                      <li>Mobile Push Channels</li>
                      <li>Chat Channels</li>
                      <li>User Notifications Preferences</li>
                    </ul>
                  </li>
                  <li>20+ Community Contributors Shoutout</li>
                  <li>Novu Managed Service</li>
                  <li>Swag giveaway</li>
                  <li>Q&A</li>
                </ul>
                <Register />
              </div>
            }
            author={{ name: 'The Novu Team', photo: '' }}
            date=""
            image={{ localFile: '' }}
            category={{ slug: '', name: '', color: '' }}
            blogPageURL="/hello"
          />
        </div>
      </article>
    </Layout>
  );
};

export default LiveEvent;
