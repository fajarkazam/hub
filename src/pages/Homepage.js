import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Strong, Span, LinkBox, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FaCamera, FaShareAltSquare, FaElementor } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"Homepage"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Section background="--color-indigo" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				sm-width="50%"
				display="flex"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
			>
				<Image height="auto" src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/New%20Logo.png?v=2023-07-03T08:16:02.073Z" width="25%" />
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel md-z-index="9">
					<Override
						slot="Content"
						align-items="center"
						padding="16px 0px 16px 16px"
						md-background="--color-light"
						md-z-index="9"
						md-justify-content="flex-start"
						background="rgba(255, 255, 255, 0)"
						justify-content="center"
					/>
					<Override slot="Children" justify-content="center" display="flex" align-items="center" />
					<Override slot="Button Text" md-display="none" />
					<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
					<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
					<Override slot="Wrapper" md-z-index="9" />
					<Box
						display="flex"
						align-items="center"
						justify-content="flex-end"
						md-flex-direction="column"
						md-margin="40px 0px 13px 0px"
						md-font="--headline4"
					>
						<Link
							href="/Homepage"
							font="normal 600 18px/1.5 --fontFamily-googleInter"
							text-decoration-line="initial"
							color="--white"
							margin="0px 20px 0px 20px"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							md-color="--indigo"
						>
							Home
						</Link>
						<Link
							href="/index1"
							font="normal 600 18px/1.5 --fontFamily-googleInter"
							text-decoration-line="initial"
							color="--white"
							margin="0px 20px 0px 20px"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							md-color="--indigo"
						>
							Home
						</Link>
						<Link
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="/index11"
							font="--base"
							text-decoration-line="initial"
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							color="--grey"
							margin="0px 20px 0px 20px"
							opacity="0.8"
						>
							Photobooth
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section
			background="linear-gradient(264.47deg,#a21ba9 29.39%,#000848 93.49%)"
			padding="36px 0 0 0"
			quarkly-title="HeroBlock"
			md-padding="36px 0 60px 0"
			flex-direction="column"
			sm-height="800px"
			sm-padding="36px 0 0 0"
			height="525px"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
				sm-flex-direction="column"
			/>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				display="flex"
				align-items="center"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="100%"
				padding="0px 0 0px 0px"
				md-padding="0px 0px 0px 0px"
				sm-margin="0px 0px 25px 0px"
			>
				<Text
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					color="--grey"
					lg-text-align="left"
					font="--base"
					text-transform="uppercase"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-align-self="center"
					sm-text-align="center"
					align-self="flex-start"
				>
					photobooth & videobooth service
				</Text>
				<Components.QuarklycommunityKitLoopText
					slides="Videobooth,Photobooth"
					sm-font="700 50px/0.4 Inter, sans-serif"
					sm-align-self="center"
					sm-text-align="center"
					font="700 50px/0.5 Inter, sans-serif"
				>
					<Override slot="Before Text" color="--light">
						The Best
					</Override>
					<Override slot="After Text" color="--light">
						In Jakarta
					</Override>
				</Components.QuarklycommunityKitLoopText>
				<Text
					font="--base"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
					opacity="1"
					text-align="left"
					sm-text-align="center"
					align-self="flex-start"
					sm-margin="0px 0px 30px 0px"
				>
					Vendor Pernikahan Jasa Photobooth dan 360 Videobooth di Jakarta
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
					sm-align-self="center"
					sm-text-align="center"
					sm-justify-content="center"
					align-self="flex-start"
				>
					<Link
						sm-margin="0px 22px 40px 0px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						href="/login"
						text-decoration-line="initial"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						md-text-align="center"
						lg-margin="0px 32px 0px 0px"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-padding="15px 16px 15px 16px"
						hover-color="--primary"
						color="--indigo"
						margin="0px 44px 0px 0px"
						lg-padding="15px 23px 15px 23px"
						md-width="50%"
						background="--color-light"
						font="--lead"
						hover-background="--color-white"
						border-width="2px"
						border-style="solid"
						border-color="--color-primary"
						sm-align-self="center"
					>
						<Strong>
							Pesan Sekarang
						</Strong>
					</Link>
				</Box>
			</Box>
			<Image
				lg-max-height="400px"
				width="100%"
				max-height="450px"
				md-margin="0px 0px 30px 0px"
				src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/808-8084160_people-in-photo-booth-removebg-preview.png?v=2023-06-16T06:06:06.541Z"
				lg-position="relative"
				lg-left="-5px"
				max-width="100%"
				sm-margin="0px 0px 0 0px"
			/>
		</Section>
		<Section padding="90px 0 100px 0" quarkly-title="Reviews-3">
			<Text
				margin="0px 0px 0 0px"
				font="normal 500 20px/1.5 --fontFamily-sansHelvetica"
				color="--indigo"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
				sm-text-align="left"
				sm-margin="0px 0px 0 0px"
			>
				Testimonials
			</Text>
			<Text
				margin="0px 0px 70px 0px"
				font="--headline2"
				text-align="center"
				md-margin="0px 0px 50px 0px"
				sm-align-self="flex-start"
				sm-text-align="left"
				sm-font="normal 700 40px/1 &quot;Inter&quot;, sans-serif"
			>
				<Span
					font-weight="normal"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					sm-font="40px/0.6 Inter, sans-serif"
				>
					<Strong sm-font="700 36px/0.5 Inter, sans-serif" sm-text-align="left" sm-color="--indigo">
						What customers say about us
					</Strong>
				</Span>
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="repeat(3, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				grid-gap="36px 30px"
				justify-content="center"
				lg-grid-template-rows="auto"
				sm-grid-template-columns="1fr"
				sm-grid-gap="30px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							I left feeling energized and inspired to take action in my career. The speakers were top-notch and the sessions were thought-provoking.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Adam Luis
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@adamluis
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							The roundtable discussion on diversity and inclusion was eye-opening and gave me tangible strategies to implement in my workplace.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Melisa Williams
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							The workshop on personal branding helped me clarify my professional goals and gave me the tools to effectively communicate my value to others.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Jane Adams
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							Attending this conference was one of the best decisions I've made for my career. The networking opportunities were invaluable and I made some great connections that have led to new opportunities.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Michael Lee
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							I appreciated the diversity of speakers and topics covered at the conference. It was refreshing to hear from voices outside of my industry and gain new perspectives.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Tom Paul
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							The organizers did a fantastic job of creating a welcoming and inclusive environment. As an introvert, I often feel uncomfortable at networking events, but I felt at ease and able to connect with others at this conference.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Maria Davidson
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							The workshops and sessions were incredibly informative and gave me practical skills that I could immediately apply to my job. I left feeling more confident and capable in my role.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Carlos Odis
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							The keynote speakers were truly inspiring and gave me a new sense of motivation and drive in my career. I feel reenergized and excited about my future possibilities.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Sarah Cook
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					padding="30px 30px 30px 30px"
					background="#f3f3f7"
					border-radius="8px"
					box-shadow="--m"
					margin="0px 0 0px 0px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					lg-margin="0px 0 0 0px"
					sm-padding="20px 15px 20px 15px"
					md-padding="20px 20px 20px 20px"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 28px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="--darkL1" md-margin="0px 0px 18px 0px">
							I was impressed by the level of organization and attention to detail at the conference. Everything ran smoothly and I felt well taken care of as an attendee.
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Leslie Alexander
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			lg-padding="56px 0 56px 0"
			sm-padding="32px 0 32px 0"
			background="--color-indigo"
			quarkly-title="Event"
			sm-background="#ffffff"
		>
			<Override slot="SectionContent" />
			<Box
				margin="0px 0px 32px 0px"
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 33px 0px"
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-padding="15px 15px 15px 15px"
				sm-margin="0px 0px 10px 0px"
				justify-content="center"
				sm-padding="15px 0 15px 0"
			>
				<Text
					font="--lead"
					color="--light"
					text-align="center"
					md-width="100%"
					max-width="600px"
					sm-text-align="left"
					sm-font="normal 500 20px/1.2 --fontFamily-sansHelvetica"
					sm-margin="16px 0px 0 0px"
					margin="16px 0px 0 0px"
					sm-color="--indigo"
				>
					Event
				</Text>
				<Text
					font="--headline2"
					color="--light"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="0 0px 0px 0px"
					sm-align-self="flex-start"
					sm-font="normal 400 36px/0.5 --fontFamily-googleInter"
					sm-margin="0 0px 40px 0px"
					sm-text-align="left"
					sm-color="--indigo"
				>
					<Strong sm-font="700 36px/1 Inter, sans-serif">
						What event do we serve{" "}
					</Strong>
				</Text>
			</Box>
			<LinkBox
				display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-wrap="wrap"
				width="100%"
				margin="0px 0px 16px 0px"
				justify-content="flex-start"
				md-margin="0px 0px 16px 0px"
			>
				<Box
					width="100%"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					md-width="100%"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/20191130_141741_733_IMG_9807.JPG?v=2023-07-03T07:48:39.955Z"
						border-radius="24px"
						max-width="100%"
						max-height="522px"
						width="100%"
						object-fit="cover"
						lg-max-height="392px"
						object-position="0% 30%"
						sm-max-height="500px"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-border-width="0px"
					flex-direction="column"
					padding="16px 12px 16px 12px"
					sm-padding="16px 0 16px 0"
				>
					<Text
						font="--headline4"
						color="--light"
						margin="0px 0px 8px 0px"
						sm-align-self="flex-start"
						sm-font="600 28px/1.3 --fontFamily-googleInter"
						sm-color="--indigo"
					>
						Wedding Party
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
						sm-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
						sm-color="--indigo"
					>
						Lorem ipsum dolor sit amet, consectetur
					</Text>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-wrap="wrap"
				width="100%"
				margin="0px 0px 16px 0px"
				justify-content="flex-start"
				md-margin="0px 0px 16px 0px"
			>
				<Box
					width="100%"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					md-width="100%"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/20191122_212017_052_IMG_9098.JPG?v=2023-07-03T07:48:19.147Z"
						border-radius="24px"
						max-width="100%"
						max-height="522px"
						width="100%"
						object-fit="cover"
						lg-max-height="392px"
						object-position="0% 30%"
						sm-max-height="500px"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-border-width="0px"
					flex-direction="column"
					padding="16px 12px 16px 12px"
					sm-padding="0 0 16px 0"
				>
					<Text font="--headline2" color="--light" margin="0px 0px 8px 0px" sm-color="--indigo">
						<Span
							font-weight="normal"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="--headline4"
							sm-font="normal 600 28px/1.2 &quot;Inter&quot;, sans-serif"
						>
							Corporate Event
						</Span>
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
						sm-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
						sm-color="--indigo"
					>
						Lorem ipsum dolor sit amet, consectetur
					</Text>
				</Box>
			</LinkBox>
			<LinkBox
				display="flex"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
				flex-wrap="wrap"
				width="100%"
				margin="0px 0px 16px 0px"
				justify-content="flex-start"
				md-margin="0px 0px 16px 0px"
			>
				<Box
					width="100%"
					align-items="flex-start"
					display="flex"
					justify-content="flex-start"
					md-width="100%"
					lg-width="100%"
				>
					<Image
						src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/20200314_220941_273_IMG_5560.JPG?v=2023-07-03T07:48:40.003Z"
						border-radius="24px"
						max-width="100%"
						max-height="522px"
						width="100%"
						object-fit="cover"
						lg-max-height="392px"
						object-position="0% 30%"
						sm-max-height="213px"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					md-border-width="0px"
					flex-direction="column"
					padding="16px 12px 16px 12px"
					sm-padding="0 0 16px 0"
				>
					<Text font="--headline3" color="--light" margin="0px 0px 8px 0px">
						<Span
							font-weight="normal"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							sm-font="600 28px/1.3 &quot;Inter&quot;, sans-serif"
							font="--headline4"
							sm-color="--indigo"
						>
							Birthday Party
						</Span>
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
						sm-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
						sm-color="--indigo"
					>
						Lorem ipsum dolor sit amet, consectetur
					</Text>
				</Box>
			</LinkBox>
		</Section>
		<Section
			padding="160px 0 24px 0"
			sm-padding="24px 0 24px 0"
			md-padding="50px 0 24px 0"
			quarkly-title="Brochure"
			sm-background="--color-indigo"
		>
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-style="solid"
				width="50%"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				flex-direction="column"
				align-items="flex-start"
				sm-padding="16px 0 16px 0"
			>
				<Box display="flex" margin="0px 0px 20px 0px" align-items="center" sm-width="100%" />
				<Text
					font="--lead"
					color="--indigo"
					text-align="center"
					md-width="100%"
					max-width="600px"
					sm-text-align="left"
					sm-font="normal 400 20px/1.2 --fontFamily-sansHelvetica"
					sm-margin="16px 0px 0 0px"
					sm-color="--light"
				>
					Package
				</Text>
				<Text
					width="85%"
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--indigo"
					sm-font="normal 600 36px/1.2 &quot;Inter&quot;, sans-serif"
					sm-color="--light"
				>
					Your Personalized Package
				</Text>
				<Text
					font="--base"
					opacity=".7"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 25px 0px"
					color="--dark"
					sm-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					sm-color="--light"
				>
					Choose the right package that match with your event
				</Text>
				<Box
					width="50%"
					flex-direction="column"
					md-width="100%"
					empty-min-width="64px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					padding="16px 16px 16px 16px"
					display="flex"
					align-items="flex-start"
					justify-content="space-between"
					empty-min-height="64px"
					empty-border-width="1px"
					sm-padding="16px 0 16px 0"
				>
					<Image
						position="static"
						lg-left="0px"
						md-width="100%"
						border-radius="10px"
						lg-max-height="366px"
						src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/billings+montana+photo+booth+rental.jfif?v=2023-06-16T03:35:58.188Z"
						left="-140px"
						max-width="100%"
						object-fit="cover"
					/>
				</Box>
				<Link
					href="/login"
					sm-padding="15px 20px 15px 20px"
					hover-background="rgba(5, 165, 255, 0)"
					border-width="1px"
					border-style="solid"
					font="--lead"
					sm-margin="0px 22px 0px 0px"
					border-color="rgba(255, 255, 255, 0.3)"
					md-width="100%"
					md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					text-decoration-line="initial"
					color="--white"
					margin="0px 44px 0px 0px"
					hover-color="--primary"
					hover-border-color="--color-primary"
					md-text-align="center"
					background="--color-indigo"
					padding="15px 30px 15px 30px"
					border-radius="10px"
					sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
					sm-border-width="2px"
					sm-border-color="--color-light"
				>
					<Strong>
						Download the brochure
					</Strong>
				</Link>
			</Box>
		</Section>
		<Section md-padding="60px 0 60px 0" padding="84px 0 60px 0" sm-padding="60px 0 60px 0" quarkly-title="Feature">
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" />
			<Text
				font="--lead"
				color="--indigo"
				text-align="center"
				md-width="100%"
				max-width="600px"
				sm-text-align="left"
				sm-font="normal 500 20px/1.2 --fontFamily-sansHelvetica"
				sm-margin="16px 0px 0 0px"
				sm-color="--indigo"
				margin="16px 0px 0 0px"
			>
				Features
			</Text>
			<Text
				width="100%"
				lg-width="100%"
				lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
				margin="0px 0px 16px 0px"
				font="--headline2"
				color="--indigo"
				sm-font="normal 800 36px/1.2 &quot;Inter&quot;, sans-serif"
				sm-margin="0px 0px 0 0px"
			>
				What you will get
			</Text>
			<Box
				border-radius="10px"
				flex-direction="column"
				width="33.333%"
				md-padding="0px 0px 0px 0px"
				sm-padding="0 0 16px 0"
				display="flex"
				align-items="flex-start"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
				md-width="100%"
				sm-width="100%"
				padding="16px 0 16px 0"
				lg-width="50%"
			>
				<Text margin="20px 0px 10px 0px" color="--dark" font="--base" opacity=".9">
					Consult with us to elevate your  event to the next level with personalized theme{" "}
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
				sm-padding="16px 0 16px 0"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaCamera}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						<Strong>
							Professional Camera Setup
						</Strong>
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Professional camera and lighting to get the best quality
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
				sm-padding="16px 0 16px 0"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaShareAltSquare}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						<Strong>
							Real Time Sharing
						</Strong>
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Download the file through QR Code and share it to the world
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
				sm-padding="16px 0 16px 0"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="fa"
						icon={FaElementor}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						<Strong>
							Custom Watermark & Overlay
						</Strong>
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get your personalized theme embedded to the result
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
				sm-padding="16px 0 16px 0"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="io"
						icon={IoIosPeople}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						<Strong>
							Live View  Display
						</Strong>
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get your own pose without any direction from our staff
					</Text>
				</LinkBox>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="33.333%"
				md-width="100%"
				sm-width="100%"
				lg-width="50%"
				sm-padding="16px 0 16px 0"
			>
				<LinkBox
					border-color="rgba(66, 82, 207, 0.1)"
					lg-height="100%"
					overflow-x="hidden"
					overflow-y="hidden"
					height="100%"
					width="100%"
					flex-direction="column"
					border-style="solid"
					border-width="2px"
					border-radius="10px"
					padding="32px 32px 32px 32px"
					display="flex"
					justify-content="flex-end"
					md-min-height="200px"
					lg-min-height="350px"
					align-items="flex-start"
				>
					<Icon
						font="48px sans-serif"
						category="io"
						icon={IoIosPeople}
						size="48px"
						color="--indigo"
					/>
					<Text color="--indigo" font="--lead" margin="32px 0px 8px 0px">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Fast & Vibrant Result
						</Strong>
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get high-quality print and video only in 10 seconds.
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section lg-padding="60px 0 40px 0" padding="60px 0 100px 0" md-padding="30px 0 30px 0" quarkly-title="Service">
			<Text
				font="--lead"
				color="--indigo"
				text-align="center"
				md-width="100%"
				max-width="600px"
				sm-text-align="left"
				sm-font="normal 500 20px/1.2 --fontFamily-sansHelvetica"
				sm-margin="16px 0px 0 0px"
				sm-color="--indigo"
				align-self="center"
				margin="16px 0px 0 0px"
			>
				Services
			</Text>
			<Text
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 40px 0px"
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--indigo"
				lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
				text-align="center"
				sm-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
				sm-text-align="left"
			>
				What service you can choose
			</Text>
			<Box
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				padding="0px 0px 0px 0px"
				border-style="solid"
				display="flex"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				md-border-color="rgba(66, 82, 207, 0.1)"
			>
				<Box display="flex" lg-width="50%" md-width="100%" width="30%">
					<Image
						margin="-1px 0px -1px -1px"
						src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/The+Photo+Booth+Guys+%287%29.jpg?v=2023-06-16T03:37:35.812Z"
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
					/>
				</Box>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					justify-content="space-between"
					md-width="100%"
					md-padding="32px 30px 32px 0px"
					display="flex"
					flex-direction="column"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
					align-self="center"
				>
					<Text
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
						margin="0px 0px 8px 0px"
						font="--headline4"
						sm-font="600 28px/1.2 &quot;Inter&quot;, sans-serif"
					>
						Selfie Photobooth
					</Text>
					<Text margin="0px 0px 15px 0px" font="--textBase" color="--darkL1" sm-margin="0px 0px 15px 0px">
						Don't want to be sick and tired any more? For quick care for you and your children, text our doctors who are available 24/7. No waiting rooms or appointments.
					</Text>
					<Link
						href="/login"
						sm-padding="15px 20px 15px 20px"
						hover-background="rgba(5, 165, 255, 0)"
						border-width="1px"
						border-style="solid"
						font="--lead"
						sm-margin="0px 22px 0px 0px"
						border-color="rgba(255, 255, 255, 0.3)"
						md-width="100%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						text-decoration-line="initial"
						color="--white"
						margin="0px 44px 0px 0px"
						hover-color="--primary"
						hover-border-color="--color-primary"
						md-text-align="center"
						background="--color-indigo"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						width="300px"
					>
						<Strong>
							Learn about photobooth
							<br />
						</Strong>
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				md-border-width="0px 0px 2px 0px"
				margin="0px 0px 20px 0px"
				width="100%"
				border-style="solid"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px"
				border-radius="10px"
				flex-wrap="wrap"
				min-height="284px"
				md-border-radius="0px"
			>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					display="flex"
					position="relative"
					md-padding="32px 30px 32px 0px"
					flex-direction="column"
					justify-content="space-between"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
					md-width="100%"
					align-self="center"
					sm-padding="32px 30px 0 0px"
				>
					<Text
						margin="0px 0px 8px 0px"
						font="--headline4"
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						360 Videobooth
					</Text>
					<Text margin="0px 0px 15px 0px" font="--textBase" color="--darkL1" sm-margin="0px 0px 15px 0px">
						Over 200 doctors are available to provide you with comprehensive care online at any time. Get help with managing chronic illnesses to achieve lifestyle objectives and optimize your pharmaceutical regimen.
					</Text>
					<Link
						href="/login"
						sm-padding="15px 20px 15px 20px"
						hover-background="rgba(5, 165, 255, 0)"
						border-width="1px"
						border-style="solid"
						font="--lead"
						sm-margin="0px 22px 0px 0px"
						border-color="rgba(255, 255, 255, 0.3)"
						md-width="100%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						text-decoration-line="initial"
						color="--white"
						margin="0px 44px 0px 0px"
						hover-color="--primary"
						hover-border-color="--color-primary"
						md-text-align="center"
						background="--color-indigo"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						width="300px"
					>
						<Strong>
							Learn about videobooth
						</Strong>
					</Link>
				</Box>
				<Box
					md-order="-1"
					width="30%"
					display="flex"
					lg-width="50%"
					md-width="100%"
				>
					<Image
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
						margin="-1px -1px -1px 0px"
						src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/casinonight_banca_lambasciatore_210522-164_websize.webp?v=2023-07-03T08:09:18.064Z"
					/>
				</Box>
			</Box>
		</Section>
		<Section sm-padding="60px 0 60px 0" lg-padding="60px 0 100px 0" padding="60px 0 160px 0" sm-color="--indigo">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Box
				padding="66px 30px 66px 30px"
				flex-direction="column"
				sm-padding="30px 15px 30px 15px"
				sm-border-radius="12px"
				align-items="center"
				background="--color-light"
				border-radius="30px"
				justify-content="center"
				width="100%"
				display="flex"
				margin="0px 0px 0px 0px"
			>
				<Text
					md-margin="0px 0px 40px 0px"
					lg-margin="0px 0px 40px 0px"
					margin="0px 0px 80px 0px"
					font="--headline2"
					color="--indigo"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
					text-align="center"
					sm-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					sm-text-align="left"
				>
					Book Now
				</Text>
				<Text
					text-align="center"
					lg-font="normal 600 30px/1.3 --fontFamily-googleInter"
					md-font="normal 600 25px/1.3 --fontFamily-googleInter"
					sm-font="--base"
					margin="0px 0px 35px 0px"
					font="normal 600 39px/1.3 --fontFamily-googleInter"
					color="--dark"
					width="750px"
					sm-display="inline"
					sm-width="85%"
					sm-color="--indigo"
				>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Strong
							font="--lead"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							15% off for photobooth and videobooth package only on July 2023
						</Strong>
					</Span>
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
					sm-align-self="center"
					sm-text-align="center"
					sm-justify-content="center"
					align-self="flex-start"
				>
					<Link
						sm-margin="0px 22px 40px 0px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						href="/login"
						text-decoration-line="initial"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						md-text-align="center"
						lg-margin="0px 32px 0px 0px"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-padding="15px 16px 15px 16px"
						hover-color="--primary"
						color="--indigo"
						margin="0px 44px 0px 0px"
						lg-padding="15px 23px 15px 23px"
						md-width="50%"
						background="--color-light"
						font="--lead"
						hover-background="--color-white"
						border-width="2px"
						border-style="solid"
						border-color="--color-primary"
						sm-align-self="center"
						sm-width="100%"
						sm-color="--light"
						sm-background="--color-indigo"
					>
						<Strong>
							Pesan Sekarang
						</Strong>
					</Link>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" color="--dark">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%" align-self="center">
					<Box display="flex" flex-direction="column">
						<Text
							as="p"
							font="--lead"
							margin="0"
							color="--indigo"
							sm-font="normal 500 20px/1.6 --fontFamily-sansHelvetica"
						>
							Questions
						</Text>
						<Text
							as="h2"
							font="--headline2"
							margin="0 0 8px 0"
							color="--indigo"
							sm-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
						>
							FAQs
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="66.66%" md-width="100%">
					<Box display="flex" flex-direction="row" flex-wrap="wrap">
						<Box
							display="flex"
							flex-direction="column"
							width="50%"
							padding="16px 16px 16px 16px"
							sm-width="100%"
						>
							<Box display="flex" flex-direction="column">
								<Text as="h3" font="--lead" margin="12px 0" sm-color="--indigo">
									<Strong font="--headline4" sm-font="600 22px/1.3 &quot;Inter&quot;, sans-serif">
										Is there life on Mars?
									</Strong>
								</Text>
								<Text
									as="p"
									font="--base"
									margin="12px 0"
									color="--dark"
									sm-color="--dark"
									opacity="1"
									sm-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
								>
									It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
								</Text>
							</Box>
						</Box>
						<Box
							display="flex"
							flex-direction="column"
							width="50%"
							padding="16px 16px 16px 16px"
							sm-width="100%"
						>
							<Box display="flex" flex-direction="column">
								<Text as="h3" font="--lead" margin="12px 0" sm-color="--indigo">
									<Strong font="--headline4" sm-font="600 22px/1.3 &quot;Inter&quot;, sans-serif">
										Why is the sky blue?
									</Strong>
								</Text>
							</Box>
							<Text
								as="p"
								font="--base"
								margin="12px 0"
								color="--dark"
								sm-color="--dark"
								sm-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
							>
								It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
							</Text>
						</Box>
						<Box
							display="flex"
							flex-direction="column"
							width="50%"
							padding="16px 16px 16px 16px"
							sm-width="100%"
						>
							<Box display="flex" flex-direction="column">
								<Text as="h3" font="--lead" margin="12px 0" sm-color="--indigo">
									<Strong font="--headline4" sm-font="600 22px/1.3 &quot;Inter&quot;, sans-serif">
										When will we get there?
									</Strong>
								</Text>
								<Text
									as="p"
									font="--base"
									margin="12px 0"
									color="--dark"
									sm-color="--dark"
									sm-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
								>
									It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
								</Text>
							</Box>
						</Box>
						<Box
							display="flex"
							flex-direction="column"
							width="50%"
							padding="16px 16px 16px 16px"
							sm-width="100%"
						>
							<Box display="flex" flex-direction="column">
								<Text as="h3" font="--lead" margin="12px 0" sm-color="--indigo">
									<Strong
										font="--headline4"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										user-select="auto"
										pointer-events="auto"
										sm-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
									>
										How much salt is in the ocean?
									</Strong>
								</Text>
								<Text
									as="p"
									font="--base"
									margin="12px 0"
									color="--dark"
									sm-color="--dark"
									sm-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
								>
									It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="#a21ba9" padding="100px 0 100px 0" md-padding="40px 0 40px 0" sm-background="--color-indigo">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-justify-content="center"
				display="flex"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="50%"
				md-align-items="center"
			>
				<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/New%20Logo.png?v=2023-07-03T08:16:02.073Z" margin="0px 0px 24px 0px" max-width="171px" width="15%" />
				<SocialMedia
					instagram="https://www.instagram.com/instagram/"
					align-items="flex-start"
					justify-content="flex-start"
					sm-align-self="center"
					sm-align-items="center"
					sm-text-align="center"
					sm-justify-content="center"
				>
					<Override
						slot="link"
						margin="0 12px 0 0px"
						hover-background="--color-indigo"
						background="--color-greyD1"
						lg-height="28px"
						lg-padding="4px 4px 4px 4px"
						lg-display="flex"
						lg-align-items="center"
						border-radius="50%"
						lg-justify-content="center"
						lg-width="28px"
						color="--light"
					/>
					<Override slot="icon" lg-font="18px sans-serif" />
				</SocialMedia>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="50%"
				display="flex"
				md-width="100%"
				md-justify-content="center"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-direction="column"
				padding="16px 16px 16px 16px"
				md-align-items="center"
				flex="1 1 0%"
				text-align="right"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					Home
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Photobooth
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Videobooth
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
				>
					Portfolio
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script place={"endOfHead"} rawKey={"648c706b260ca6b9fdd89137"}>
				{"<!-- Google Tag Manager -->\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-KDZP2XZ');</script>\n<!-- End Google Tag Manager -->"}
			</script>
			<script place={"endOfBody"} rawKey={"648c7074d67002305afef396"}>
				{"<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-KDZP2XZ\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->"}
			</script>
		</RawHtml>
	</Theme>;
});