import React, { useEffect, useRef } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

const MapWrapper = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let google = window.google;
    if (!google) return;

    let map = mapRef.current;
    let lat = "10.0431";
    let lng = "76.3243";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      center: { lat: 9.9312, lng: 76.2673 },
      zoom: 12,
      scrollwheel: false,
      styles: [/* Your map styles */],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "CUSAT",
    });

    const contentString = "S001";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

    return () => {
      google.maps.event.clearListeners(marker, "click");
    };
  }, []);

  return <div ref={mapRef} style={{ height: "400px" }} />;
};

const Map = () => {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card className="card-plain">
            <CardHeader>Google Maps</CardHeader>
            <CardBody>
              <div
                id="map"
                className="map"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <MapWrapper />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Map;
