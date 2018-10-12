import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DonutSmall from "@material-ui/icons/DonutSmall";
import SearchIcon from "@material-ui/icons/Search";
import CropIcon from "@material-ui/icons/Crop";
const timeline = [
  {
    image: 2,
    title: "Sripad editted an image",
    createdAt: "2018-09-12 10:06 PM",
    icon: <EditIcon color="secondary" />,
    message: "Sripad resize the photo to 256 x 256"
  },
  {
    image: 0,
    title: "Sripad segmented an image",
    createdAt: "2018-09-10 06:06 PM",
    icon: <DonutSmall color="secondary" />,
    message: "Sripad segmented the image with 3 different sections."
  },
  {
    image: 2,
    title: "Hung classified an image",
    createdAt: "2018-09-03 11:29 AM",
    icon: <SearchIcon color="secondary" />,
    message: "Hung classified this image to be 'Alzheimer'."
  },
  {
    image: 1,
    title: "Sripad cropped an image",
    createdAt: "2018-09-02 05:11 PM",
    icon: <CropIcon color="secondary" />,
    message: "Sripad cropped a section of size 128 x 128"
  },
  {
    image: 2,
    title: "Giang segmented an image",
    createdAt: "2018-08-28 03:10 PM",
    icon: <DonutSmall color="secondary" />,
    message: "Giang segmented the image with 4 different sections."
  },
  {
    image: 1,
    title: "Hung classified an image",
    createdAt: "2018-08-10 03:02 PM",
    icon: <SearchIcon color="secondary" />,
    message: "Hung classified this image to be 'Healthy'."
  }
];

export default timeline;
