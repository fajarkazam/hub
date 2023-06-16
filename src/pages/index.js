import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Strong, Span, LinkBox, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FaCamera, FaShareAltSquare, FaElementor } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
				<Image height="auto" src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/Logo%20Hub.png?v=2023-06-08T05:05:19.931Z" width="25%" />
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
							href="#"
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
							href="#about"
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
						<Link
							color="--grey"
							margin="0px 20px 0px 20px"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							href="#contact"
							font="--base"
							text-decoration-line="initial"
							opacity="0.8"
							hover-opacity="1"
							md-color="--indigo"
						>
							Videobooth
						</Link>
						<Link
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							font="--base"
							color="--grey"
							opacity="0.8"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="#testimonial"
							text-decoration-line="initial"
							margin="0px 8px 0px 20px"
						>
							Portfolio
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section background="linear-gradient(264.47deg,#a21ba9 29.39%,#000848 93.49%)" padding="36px 0 0 0" quarkly-title="HeroBlock" md-padding="36px 0 60px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
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
				>
					photobooth & videobooth service
				</Text>
				<Components.QuarklycommunityKitLoopText slides="Videobooth,Photobooth">
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
					text-align="center"
				>
					Take your event to the next level with our Photobooth and 360 Videobooth experience. Transport your guests to a whole new dimension as they capture immersive moments from every angle.{" "}
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
				>
					<Link
						sm-margin="0px 22px 0px 0px"
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
					>
						<Strong>
							Book Now
						</Strong>
					</Link>
				</Box>
				<Box
					empty-border-style="solid"
					width="50%"
					display="flex"
					justify-content="flex-end"
					empty-border-width="1px"
					empty-min-height="64px"
					empty-border-color="LightGray"
					align-items="center"
					md-width="100%"
					md-order="-1"
					empty-min-width="64px"
				>
					<Image
						lg-max-height="400px"
						width="100%"
						max-height="450px"
						md-margin="0px 0px 30px 0px"
						src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/808-8084160_people-in-photo-booth-removebg-preview.png?v=2023-06-16T06:06:06.541Z"
						lg-position="relative"
						lg-left="-5px"
						max-width="100%"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="90px 0 120px 0" quarkly-title="Partners-2">
			<Text margin="0px 0px 20px 0px" text-align="center" font="--headline2" color="--indigo">
				Clients and partners
			</Text>
			<Text
				margin="0px 0px 70px 0px"
				text-align="center"
				font="normal 400 20px/1.5 --fontFamily-sansHelvetica"
				color="#606469"
				sm-margin="0px 0px 50px 0px"
			>
				Partnerships can help companies expand their reach, increase revenue, and access new markets.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(6, 1fr)"
				grid-gap="0 54px"
				max-width="100%"
				align-items="center"
				width="60%"
				lg-grid-template-columns="repeat(3, 1fr)"
				lg-grid-gap="36px 72px"
				sm-grid-template-columns="repeat(2, 1fr)"
				align-self="center"
			>
				<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/logo-dslrbooth-blue.png?v=2023-06-08T06:19:44.976Z" display="block" width="250px" height="150px" />
				<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/DNP-logo-270E6265A5-seeklogo.com.png?v=2023-06-08T06:18:50.976Z" display="block" width="125px" height="150px" />
				<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/microsoft-surface-logo-088B989CFA-seeklogo.com.png?v=2023-06-08T06:18:18.663Z" display="block" width="150px" height="150px" />
			</Box>
		</Section>
		<Section padding="90px 0 100px 0" quarkly-title="Reviews-3">
			<Text
				margin="0px 0px 20px 0px"
				font="normal 500 20px/1.5 --fontFamily-sansHelvetica"
				color="--indigo"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			>
				Testimonials
			</Text>
			<Text margin="0px 0px 70px 0px" font="--headline2" text-align="center" md-margin="0px 0px 50px 0px">
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
				>
					<Strong>
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/13q.jpg?v=2023-04-18T18:57:20.417Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21:07:08.834Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Melisa Williams
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@melisawilliams
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/16q.jpg?v=2023-04-18T18:57:30.439Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Jane Adams
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@janeadams
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21:12:16.116Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Michael Lee
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@michaellee
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/3q.jpg?v=2023-04-17T22:37:36.273Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Tom Paul
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@tompaul
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21:12:01.188Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Maria Davidson
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@mariadavid
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/9q.jpg?v=2023-04-18T18:57:05.682Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Carlos Odis
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@carlosodis
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/6q.jpg?v=2023-04-18T18:56:44.939Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Sarah Cook
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@sarahcook
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
						<Image
							src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20:54:40.886Z"
							display="block"
							margin="0px 25px 0px 0px"
							width="80px"
							height="80px"
							border-radius="50%"
							border-width="1px"
							border-style="solid"
							border-color="#b0b7bb"
							object-fit="cover"
							md-margin="0px 15px 0px 0px"
							md-width="68px"
							md-height="68px"
						/>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sans">
								Leslie Alexander
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#676d73">
								@lesliealexander
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
		>
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
			>
				<Text
					font="--headline2"
					color="--light"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="16px 0px 0px 0px"
				>
					Event
				</Text>
				<Text
					font="--lead"
					color="--light"
					text-align="center"
					md-width="100%"
					max-width="600px"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
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
						src="https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1220&q=80"
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
				>
					<Text font="--headline3" color="--light" margin="0px 0px 8px 0px">
						Wedding Party
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--light">
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
						src="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
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
				>
					<Text font="--headline2" color="--light" margin="0px 0px 8px 0px">
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
							font="--headline3"
						>
							Corporate Event
						</Span>
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--light">
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
						src="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
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
						>
							Birthday Party
						</Span>
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--light">
						Lorem ipsum dolor sit amet, consectetur
					</Text>
				</Box>
			</LinkBox>
		</Section>
		<Section padding="160px 0 24px 0" sm-padding="80px 0 24px 0" md-padding="50px 0 24px 0" quarkly-title="Brochure">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
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
			>
				<Box display="flex" margin="0px 0px 20px 0px" align-items="center" sm-width="100%" />
				<Text
					width="85%"
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--indigo"
					sm-font="normal 800 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Complete Personalized Package
				</Text>
				<Text
					font="--base"
					opacity=".7"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 25px 0px"
					color="--dark"
				>
					Choose the right package that match with your event
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
				>
					<Strong>
						Download the brochure
					</Strong>
				</Link>
			</Box>
		</Section>
		<Section md-padding="60px 0 60px 0" padding="84px 0 60px 0" sm-padding="60px 0 60px 0" quarkly-title="Feature">
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" />
			<Box
				border-radius="10px"
				flex-direction="column"
				width="33.333%"
				md-padding="0px 0px 0px 0px"
				sm-padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				lg-margin="0px 0px 0px 0px"
				md-width="100%"
				sm-width="100%"
				padding="16px 16px 16px 16px"
				lg-width="50%"
			>
				<Text
					lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--indigo"
					font="--headline4"
					margin="15px 0px 0px 0px"
					sm-font="700 25px/1.3 &quot;Inter&quot;, sans-serif"
				>
					Best in Class Services
				</Text>
				<Text margin="20px 0px 10px 0px" color="--dark" font="--base" opacity=".9">
					Consult with us to enhance your  event to the next level with personalized theme{" "}
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
						DSLR  Standart Tools
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Manage current issues and prevent future diseases in one go.
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
						Real Time Sharing
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Manage current issues and prevent future diseases in one go.{"\n\n"}
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
						Variety Package
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get free care for your children over 3 with a monthly subscription.
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
						Personalized Theme
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get high-quality remote care powered by doctors and data.
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
						Background Included
					</Text>
					<Text color="--dark" font="--textBase" margin="0px 0px 0px 0px">
						Get high-quality remote care powered by doctors and data.
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section lg-padding="60px 0 40px 0" padding="60px 0 100px 0" md-padding="30px 0 30px 0" quarkly-title="Service">
			<Text
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 40px 0px"
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--indigo"
				lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
				text-align="center"
			>
				Our Services
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
						src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
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
					<LinkBox
						bottom="-34px"
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="auto"
						top="auto"
						left="56px"
						height="48px"
						width="48px"
					>
						<Image
							width="48px"
							height="48px"
							top="32px"
							left="auto"
							lg-height="24px"
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							position="static"
							right="32px"
							bottom="auto"
							lg-width="24px"
						/>
					</LinkBox>
					<Text
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
						margin="0px 0px 8px 0px"
						font="--headline4"
					>
						Selfie Photobooth
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						Don't want to be sick and tired any more? For quick care for you and your children, text our doctors who are available 24/7. No waiting rooms or appointments.
					</Text>
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
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						Over 200 doctors are available to provide you with comprehensive care online at any time. Get help with managing chronic illnesses to achieve lifestyle objectives and optimize your pharmaceutical regimen.
					</Text>
					<LinkBox
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="auto"
						top="auto"
						left="58px"
						bottom="-31px"
						height="48px"
						width="48px"
					>
						<Image
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							left="auto"
							lg-height="24px"
							top="32px"
							bottom="auto"
							lg-width="24px"
							width="48px"
							height="48px"
							position="static"
							right="32px"
						/>
					</LinkBox>
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
						src="https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					/>
				</Box>
			</Box>
		</Section>
		<Section sm-padding="60px 0 60px 0" lg-padding="60px 0 100px 0" padding="60px 0 160px 0">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Box
				width="87%"
				min-height="16px"
				height="30px"
				border-radius="30px 30px 0px 0px"
				background="--color-light"
				opacity="0.3"
			/>
			<Box
				background="--color-light"
				opacity="0.4"
				sm-display="none"
				width="93%"
				min-height="16px"
				height="30px"
				border-radius="30px 30px 0px 0px"
			/>
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
				<Text font="--lead" color="--primary" text-transform="uppercase" margin="0px 0px 25px 0px">
					Booking
				</Text>
				<Text
					text-align="center"
					lg-font="normal 600 30px/1.3 --fontFamily-googleInter"
					md-font="normal 600 25px/1.3 --fontFamily-googleInter"
					sm-font="normal 600 19px/1.3 --fontFamily-googleInter"
					margin="0px 0px 35px 0px"
					font="normal 600 39px/1.3 --fontFamily-googleInter"
					color="--dark"
					width="750px"
				>
					We offer 15% off for photobooth and videobooth package only on June 2023
				</Text>
				<Box
					border-color="rgba(5, 0, 11, 0.1)"
					border-radius="16px"
					border-width="1px"
					border-style="solid"
					sm-width="100%"
					background="#ffffff"
					padding="12px 12px 12px 12px"
				>
					<Components.QuarklycommunityKitNetlifyForm>
						<Input
							placeholder="Email Address"
							sm-width="100%"
							sm-padding="12px 14px 12px 14px"
							border-width="0px"
							padding="14px 16px 14px 16px"
							width="320px"
							md-width="250px"
							name="Email Address"
							type="email"
							required
							background="rgba(255, 255, 255, 0)"
						/>
						<Button
							sm-width="100%"
							border-width="1px"
							border-color="--color-primary"
							font="--base"
							padding="14px 53px 14px 53px"
							sm-padding="12px 15px 12px 15px"
							hover-background="--color-light"
							hover-color="--primary"
							border-style="solid"
							background="--color-primary"
							border-radius="10px"
							md-padding="14px 30px 14px 30px"
						>
							Subscribe
						</Button>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" color="--dark">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%" align-self="center">
					<Box display="flex" flex-direction="column">
						<Text as="h2" font="--headline2" margin="0 0 8px 0" color="--indigo">
							FAQs
						</Text>
						<Text as="p" font="--lead" margin="0" color="--greyD2">
							Need answers? We got’em
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
								<Text as="h3" font="--lead" margin="12px 0">
									<Strong font="--headline4">
										Is there life on Mars?
									</Strong>
								</Text>
								<Text as="p" font="--base" margin="12px 0" color="--greyD2">
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
								<Text as="h3" font="--lead" margin="12px 0">
									<Strong font="--headline4">
										Why is the sky blue?
									</Strong>
								</Text>
							</Box>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
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
								<Text as="h3" font="--lead" margin="12px 0">
									<Strong font="--headline4">
										When will we get there?
									</Strong>
								</Text>
								<Text as="p" font="--base" margin="12px 0" color="--greyD2">
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
								<Text as="h3" font="--lead" margin="12px 0">
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
									>
										How much salt is in the ocean?
									</Strong>
								</Text>
								<Text as="p" font="--base" margin="12px 0" color="--greyD2">
									It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="#a21ba9" padding="100px 0 100px 0" md-padding="40px 0 40px 0">
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
				<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/Logo%20Hub.png?v=2023-06-08T05:05:19.931Z" margin="0px 0px 24px 0px" max-width="171px" width="15%" />
				<SocialMedia instagram="https://www.instagram.com/instagram/" align-items="flex-start" justify-content="flex-start">
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
		</RawHtml>
	</Theme>;
});