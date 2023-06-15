import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Strong, Icon, LinkBox, Hr, Input, Button } from "@quarkly/widgets";
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
		<Image
			md-top="300px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			position="absolute"
			right="0px"
			bottom="auto"
			top="130px"
			z-index="1"
			lg-right="-200px"
			md-width="600px"
		/>
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
		<Section background="linear-gradient(264.47deg,#a21ba9 29.39%,#000848 93.49%)" padding="36px 0 80px 0" quarkly-title="HeroBlock" md-padding="36px 0 60px 0">
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
				align-items="flex-start"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="70%"
				padding="0px 180px 0px 0px"
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
				<Text
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--white"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
					display="block"
					align-self="flex-start"
					order="0"
					flex="1 1 0%"
					max-width="100%"
					min-width="100%"
				>
					<Strong>
						Selfie Photobooth and 360 Videobooth Services for Every Occasion
					</Strong>
					{"\n\n"}
				</Text>
				<Text
					font="--base"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
					opacity="1"
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
			</Box>
			<Box
				empty-border-style="solid"
				width="30%"
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
					src="https://images.unsplash.com/photo-1556570836-1b2c15b33119?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					lg-position="relative"
					lg-left="-5px"
					max-width="100%"
				/>
			</Box>
		</Section>
		<Section padding="160px 0 24px 0" sm-padding="80px 0 24px 0" md-padding="50px 0 24px 0">
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
					src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
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
				<Box display="flex" margin="0px 0px 20px 0px" align-items="center" sm-width="100%">
					<Image width="24px" height="24px" src="https://uploads.quarkly.io/6123949e957019001e284458/images/icon-man.svg?v=2021-09-21T22:14:38.397Z" margin="0px 15px 0px 0px" />
					<Text
						margin="0px 0px 0px 0px"
						color="--primary"
						font="--lead"
						lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					>
						Choose your right package
					</Text>
				</Box>
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
		<Section md-padding="60px 0 60px 0" padding="84px 0 60px 0" sm-padding="60px 0 60px 0">
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
				<Text color="--primary" lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif" margin="0px 0px 0px 0px" font="--lead">
					Personalized photobooth
				</Text>
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
				<Image height="48px" src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z" width="48px" />
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
		</Section>
		<Section padding="60px 0 100px 0" md-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				justify-content="center"
				align-items="flex-start"
				flex-direction="column"
				width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
			>
				<Text
					margin="0px 0px 38px 0px"
					font="--headline2"
					color="--indigo"
					md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					text-align="left"
				>
					Latest User Reviews
				</Text>
				<Hr
					border-style="solid"
					margin="0px 0px 0px 0px"
					height="0px"
					lg-display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
				/>
			</Box>
			<Box
				flex-direction="column"
				justify-content="flex-start"
				border-width="0px 1px 0px 0px"
				md-padding="32px 16px 16px 16px"
				width="25%"
				max-height="265px"
				display="flex"
				align-items="center"
				sm-justify-content="flex-start"
				lg-justify-content="flex-start"
				md-align-items="center"
				border-color="rgba(66, 82, 207, 0.1)"
				height="100%"
				md-width="50%"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				margin="0px 0px 0px 0px"
				padding="16px 32px 16px 16px"
			>
				<Image
					object-fit="cover"
					border-radius="50%"
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://images.unsplash.com/photo-1594194610831-c3f92ec62180?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=228&q=80"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					John B.
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					I like the app! The doctors are very helpful and friendly. I've saved a lot on the trip and hospital bills.
				</Text>
			</Box>
			<Box
				padding="16px 32px 16px 32px"
				border-width="0px 1px 0px 1px"
				width="25%"
				md-align-items="center"
				align-items="center"
				flex-direction="column"
				border-style="solid"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-border-width="0px 0px 0px 1px"
				md-justify-content="flex-start"
				sm-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
				max-height="265px"
				display="flex"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				height="100%"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				md-width="50%"
			>
				<Image
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://images.unsplash.com/photo-1552452518-f921c926b76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=272&q=80"
					object-fit="cover"
					border-radius="50%"
				/>
				<Text font="--lead" color="--indigo" sm-text-align="center" margin="0px 0px 8px 0px">
					Bob W.
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					I got professional help and my prescription quite fast. The app is awesome. The doctors are real pros!
				</Text>
			</Box>
			<Hr
				display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-style="solid"
				margin="0px 16px 32px 16px"
				md-margin="16px 16px 16px 16px"
				md-display="block"
				border-width="2px 0 0 0"
				height="0px"
			/>
			<Box
				border-color="rgba(66, 82, 207, 0.1)"
				md-justify-content="flex-start"
				sm-margin="0px 0px 30px 0px"
				padding="16px 32px 16px 32px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				sm-padding="32px 16px 16px 16px"
				border-width="0px 1px 0px 1px"
				lg-min-height="298px"
				md-border-width="0px 1px 0px 0px"
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				height="100%"
				width="25%"
				md-width="50%"
				lg-justify-content="flex-start"
				md-align-items="center"
				sm-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
				max-height="265px"
			>
				<Image
					src="https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=274&q=80"
					object-fit="cover"
					border-radius="50%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					Natalie J.
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					One of the best medical apps I've ever come across! Highly recommend to everyone.
				</Text>
			</Box>
			<Box
				align-items="center"
				padding="16px 32px 16px 32px"
				border-width="0px 0px 0px 1px"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				height="100%"
				md-align-items="center"
				width="25%"
				max-height="265px"
				md-width="50%"
				margin="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				display="flex"
				sm-justify-content="flex-start"
				flex-direction="column"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				md-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
			>
				<Image
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
					object-fit="cover"
					border-radius="50%"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					Laura H.
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					I got my meds so fast. Thank you a lot! You are a lifesaver.
				</Text>
			</Box>
		</Section>
		<Section lg-padding="60px 0 40px 0" padding="60px 0 100px 0" md-padding="30px 0 30px 0">
			<Text
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 40px 0px"
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--indigo"
				lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
			>
				Introduce The 360 Videobooth
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
						bottom="auto"
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="32px"
						top="32px"
						left="auto"
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
						Short video style result
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
					<LinkBox
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="32px"
						top="32px"
						left="auto"
						bottom="auto"
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
					<Text
						margin="0px 0px 8px 0px"
						font="--headline4"
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						Instant sharing
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						Over 200 doctors are available to provide you with comprehensive care online at any time. Get help with managing chronic illnesses to achieve lifestyle objectives and optimize your pharmaceutical regimen.
					</Text>
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
			<Box
				display="flex"
				width="100%"
				border-style="solid"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
			>
				<Box md-width="100%" width="30%" display="flex" lg-width="50%">
					<Image
						margin="-1px 0px -1px -1px"
						src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
					/>
				</Box>
				<Box
					md-width="100%"
					padding="32px 17% 32px 62px"
					display="flex"
					lg-width="50%"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					md-padding="32px 30px 32px 0px"
					width="70%"
					flex-direction="column"
					justify-content="space-between"
					align-self="center"
				>
					<LinkBox
						position="absolute"
						right="32px"
						top="32px"
						bottom="auto"
						left="auto"
						lg-right="16px"
						lg-top="49px"
					>
						<Image
							lg-width="24px"
							lg-height="24px"
							right="32px"
							top="32px"
							left="auto"
							bottom="auto"
							width="48px"
							height="48px"
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							position="static"
						/>
					</LinkBox>
					<Text
						margin="0px 0px 8px 0px"
						font="--headline4"
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						Personalized to match with your event
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						We are constantly getting better and more affordable. Our technology can keep prices low because our care teams are more concentrated on you rather than paperwork or billing. Plus we got rid of copays and hidden fees.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="60px 0 90px 0"
			position="relative"
			lg-padding="60px 0 60px 0"
			sm-padding="30px 0 30px 0"
			md-padding="30px 0 30px 0"
		>
			<Override
				slot="SectionContent"
				lg-padding="0px 0px 0px 0px"
				max-width="1194px"
				flex-wrap="wrap"
				flex-direction="row"
			/>
			<Box
				lg-align-items="flex-start"
				flex-direction="row"
				justify-content="flex-start"
				margin="0px 0px 64px 0px"
				padding="16px 0px 16px 0px"
				lg-margin="0px 0px 24px 0px"
				sm-flex-wrap="wrap"
				display="flex"
				align-items="center"
				sm-margin="0px 0px 30px 0px"
				width="100%"
			>
				<Box width="50%" sm-width="100%">
					<Text color="--indigo" sm-margin="0px 0px 16px 0px" margin="0px 0px 0px 0px" font="--headline4">
						Powered by the best
					</Text>
				</Box>
				<Box
					width="50%"
					padding="0px 20% 0px 0px"
					lg-padding="0px 0px 0px 0px"
					sm-width="100%"
					text-align="right"
				>
					<Text
						margin="0px 0px 0px 0px"
						font="--textBase"
						color="--dark"
						text-align="right"
						width="500px"
						display="flex"
						flex-direction="column"
						align-content="flex-end"
					>
						We only use the best to give you special results for your event. Whether it is a wedding, birthday, corporate event, school graduation, or even business opening event.
					</Text>
				</Box>
			</Box>
			<Hr
				border-style="solid"
				height="0px"
				margin="0px 0px 32px 0px"
				lg-margin="0px 0px 16px 0px"
				lg-display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px 0 0 0"
			/>
			<Box
				margin="0px 0px 0px 0px"
				sm-flex-wrap="wrap"
				sm-margin="0px 0px 0px 0px"
				justify-content="center"
				flex-wrap="wrap"
				width="100%"
				display="flex"
			>
				<Box
					border-style="solid"
					sm-padding="0px 0px 0px 0px"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					sm-display="flex"
					sm-align-items="center"
					width="33.333%"
					padding="32px 74px 32px 74px"
					border-width="0px 1px 0px 0px"
					sm-justify-content="center"
				>
					<Box
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						justify-content="center"
						margin="0px 0px 0px 0px"
						sm-width="90%"
						width="100%"
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
					>
						<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/microsoft-surface-logo-088B989CFA-seeklogo.com.png?v=2023-06-08T06:18:18.663Z" sm-min-height="35px" />
					</Box>
				</Box>
				<Box
					border-width="0px 1px 0px 1px"
					md-border-width="0px 0px 0px 1px"
					sm-display="flex"
					sm-align-items="center"
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					width="33.333%"
					padding="32px 74px 32px 74px"
					border-style="solid"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
				>
					<Box
						sm-width="90%"
						width="100%"
						padding="30px 25px 30 25px"
						align-items="center"
						margin="0px 0px 0px 0px"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						display="flex"
						justify-content="center"
						lg-padding="18px 18px 18px 18px"
					>
						<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/DNP-logo-270E6265A5-seeklogo.com.png?v=2023-06-08T06:18:50.976Z" sm-min-height="35px" />
					</Box>
				</Box>
				<Hr
					md-display="block"
					display="none"
					border-style="solid"
					height="0px"
					lg-margin="16px 0px 16px 0px"
					margin="32px 0px 32px 0px"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
				/>
				<Box
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					md-border-width="0px 1px 0px 0px"
					sm-display="flex"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-width="0px 0px 0px 1px"
					border-style="solid"
					sm-align-items="center"
					width="33.333%"
					border-color="rgba(66, 82, 207, 0.1)"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						margin="0px 0px 0px 0px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
						sm-width="90%"
						padding="55px 25px 55px 25px"
						display="flex"
						justify-content="center"
						align-content="center"
					>
						<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/logo-dslrbooth-blue.png?v=2023-06-08T06:19:44.976Z" sm-min-height="35px" />
					</Box>
				</Box>
				<Hr
					margin="32px 0px 32px 0px"
					lg-margin="16px 0px 16px 0px"
					md-display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
					border-style="solid"
					height="0px"
				/>
				<Hr
					height="0px"
					border-width="2px 0 0 0"
					border-style="solid"
					margin="32px 0px 32px 0px"
					lg-margin="16px 0px 16px 0px"
					md-display="block"
					display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
				/>
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
					NEWSLETTER
				</Text>
				<Text
					text-align="center"
					lg-font="normal 600 30px/1.3 --fontFamily-googleInter"
					md-font="normal 600 25px/1.3 --fontFamily-googleInter"
					sm-font="normal 600 19px/1.3 --fontFamily-googleInter"
					margin="0px 0px 35px 0px"
					font="normal 600 39px/1.3 --fontFamily-googleInter"
					color="--dark"
				>
					We offer 20% off for photobooth and videobooth package
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
				<Image src="https://uploads.quarkly.io/64815ff8032e8d0018850961/images/Logo%20Hub.png?v=2023-06-08T05:05:19.931Z" margin="0px 0px 24px 0px" max-width="171px" width="25%" />
				<SocialMedia
					facebook="https://www.facebook.com/quarklyapp/"
					twitter="https://twitter.com/quarklyapp"
					telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					instagram="https://www.instagram.com/instagram/"
					align-items="flex-start"
					justify-content="flex-start"
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
		</RawHtml>
	</Theme>;
});