import { Modal } from "@components/common"
import { Curriculum, Hero, Keypoints } from "@components/course"
import { BaseLayout } from "@components/layout"

export default function Course() {

    return (
        <>
            <Hero />
            <Keypoints />
            <Curriculum />
            <Modal />
        </>
    )
}

Course.Layout = BaseLayout