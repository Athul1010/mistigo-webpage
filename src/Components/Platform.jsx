import React, { useState } from 'react';
import '../Styles/Platform.css';
import android from '../assets/android.png';
import ios from '../assets/iOS.png';
import macOS from '../assets/macOS.png';
import windows from '../assets/windows.png';
import tvOS from '../assets/tvOS.png';
import fireOS from '../assets/fireOS.png';

const platforms = [
  {
    name: "Android",
    description: "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
    image: android,
  },
  {
    name: "iOS",
    description: "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
    image: ios,
  },
  {
    name: "macOS",
    description: "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
    image: macOS,
  },
  {
    name: "Windows",
    description: "Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.",
    image: windows,
  },
  {
    name: "tvOS",
    description: "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
    image: tvOS,
  },
  {
    name: "FireOS",
    description: "Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",
    image: fireOS,
  },
];

const Platform = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Android");

  const handlePlatformClick = (platformName) => {
    setSelectedPlatform(platformName);
  };

  return (
    <div className='container-fluid devices'>
      <div className='container'>
        <h1 className='device-title'>Multi-platform Endpoint Management</h1>
        <p className='device-paragraph'>Devices of varying platforms? Hexnode thrives in a diverse environment.</p>
        <div className='row'>
          {/* Image Section */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            {platforms.map(platform => (
              platform.name === selectedPlatform && (
                <div key={platform.name}>
                  <img src={platform.image} alt='' className="img-fluid" />
                  {/* <img src={platform.image} alt='' className={`img-fluid platform-img ${platform.name === "FireOS" ? "fireOS-img" : ""}`} /> */}
                </div>
              )
            ))}
          </div>

          {/* Text Section */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-section">
            {platforms.map(platform => (
              <div key={platform.name}>
                
                {platform.name !== selectedPlatform && (
                  <h1 
                    className={`platform-title ${platform.name === selectedPlatform ? 'no-border' : ''}`}
                    onClick={() => handlePlatformClick(platform.name)}
                    style={{ cursor: 'pointer' }}
                  >
                    {platform.name}
                  </h1>
                )}
                
                {platform.name === selectedPlatform && (
                  <div className="card card-container">
                    <div className="card-body">
                      <h3 className='cards-titles'>{platform.name}</h3>
                      <p className='device-des'>{platform.description}</p>
                      <p className='try'>Try Hexnode on your endpoints</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* {platforms.map(platform => (
              <div key={platform.name}>
               
                <h1
                  className={`platform-title ${platform.name === selectedPlatform ? 'no-border' : ''}`}
                  onClick={() => handlePlatformClick(platform.name)}
                  style={{ cursor: 'pointer' }}
                >
                  {platform.name}
                </h1>

               
                {platform.name === selectedPlatform && (
                  <div className="card">
                    <div className="card-body">
                      <h3>{platform.name}</h3>
                      <p>{platform.description}</p>
                      <p>Try Hexnode on your endpoints</p>
                    </div>
                  </div>
                )}
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
