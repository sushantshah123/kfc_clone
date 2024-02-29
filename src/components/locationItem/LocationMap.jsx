import React from 'react';

const LocationMap = () => {
  return (
    <div className='md:w-1/3 w-full'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3728134206194!2d85.39474177359658!3d27.674870026926587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a8839056e21%3A0x31a1e902482ff312!2sKFC%20Thimi!5e0!3m2!1sen!2snp!4v1709135054204!5m2!1sen!2snp"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
       {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2911420783335!2d85.3142324735967!3d27.67739512681531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cb96c074dd%3A0xaf3b4dee35530d97!2sKFC%20Labim%20Mall!5e0!3m2!1sen!2snp!4v1709135319679!5m2!1sen!2snp" 
      width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      */}
    </div>
  );
};

export default LocationMap;
