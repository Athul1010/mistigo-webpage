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

  return (
    <div className='container-fluid devices' id='platform_container'>
      <div className='container'>
        <h1 className='device-title'>Multi-platform Endpoint Management</h1>
        <p className='device-paragraph'>Devices of varying platforms? Hexnode thrives in a diverse environment.</p>
        <div className='row'>
          {/* Image Section */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            {platforms.map(platform => (
              platform.name === selectedPlatform && (
                <div key={platform.name}>
                  <img src={platform.image} alt={platform.name} className="img-fluid" />
                </div>
              )
            ))}
          </div>

          {/* Text Section */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-section" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            {platforms.map((platform, index) => (
              <div key={platform.name}>
                {platform.name !== selectedPlatform && (
                  <h1
                    className={`platform-title ${index + 1 < platforms.length && platforms[index + 1].name === selectedPlatform ? 'border-bottom-0' : ''
                      }`}
                    onClick={() => setSelectedPlatform(platform.name)}
                    style={{ cursor: 'pointer' }}
                  >
                    {platform.name}
                  </h1>
                )}
                {platform.name === selectedPlatform && (
                  <div className="card mt-0 card-container">
                    <div className="card-body">
                      <h3 className='cards-titles'>{platform.name}</h3>
                      <p className='device-des'>{platform.description}</p>
                      <p className='try'>Try Hexnode on your endpoints</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
