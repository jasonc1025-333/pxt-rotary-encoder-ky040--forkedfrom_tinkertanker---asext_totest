control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_RADIO_EVT_DATAGRAM, function () {
    encoder_A_C1_DigitalValue_StateRiseFallChange_Count_2_Int += 10
    serial.writeLine("***** ***** RotaryEncoder.on_EncoderNewState_Event_Fn: " + convertToText(encoder_B_C2_DigitalValue_StateRiseFallChange_Count_2_Int))
})
input.onButtonPressed(Button.A, function () {
    motor_Power_Left_Int += 10
})
input.onButtonPressed(Button.AB, function () {
    motor_Power_Left_Int = 0
    wuKong.setAllMotor(motor_Power_Left_Int, 0)
})
input.onButtonPressed(Button.B, function () {
    motor_Power_Left_Int += -10
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    quest_Note_4.quest_Show_String_For_Note_Small_Fn(
    ""
    )
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P0,
    EventBusValue.MICROBIT_RADIO_EVT_DATAGRAM
    )
})
let _system_Cpu_Delay_msec_Int = 0
let motor_PinValue_Digital_Now_Int = 0
let motor_PinValue_Digital_Old_Int = 0
let count_B_Int = 0
let motor_Power_Left_Int = 0
let count_A_Int = 0
let motor_PinValue_Analog_Now_Int = 0
let encoder_A_C1_DigitalValue_StateRiseFallChange_Count_2_Int = 0
let encoder_B_C2_DigitalValue_StateRiseFallChange_Count_2_Int = 0
//// jwc y RotaryEncoder.on_EncoderNewState_Event_Fn(300, 5, function () {
//// jwc RotaryEncoder.on_EncoderNewState_Event_Fn(300, 1, function () {
//// jwc RotaryEncoder.on_EncoderNewState_Event_Fn(300, 0, function () {
//// jwc y RotaryEncoder.on_EncoderNewState_Event_Fn(300, 1, true, function () {
RotaryEncoder.on_EncoderNewState_Event_Fn(300, 1, false, function () {
    encoder_A_C1_DigitalValue_StateRiseFallChange_Count_2_Int += 1
    serial.writeLine("***** ***** RotaryEncoder.on_EncoderNewState_Event_Fn: " + convertToText(encoder_B_C2_DigitalValue_StateRiseFallChange_Count_2_Int))
})
// / jwc TODO Rename?
// //jwc y RotaryEncoder.init_Encoder_AnalogPins_Fn(AnalogPin.P0, AnalogPin.P1)
RotaryEncoder.init_Encoder_AnalogPins_Fn(AnalogPin.P1, AnalogPin.P0)
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.clearScreen()
if (true) {
    motor_Power_Left_Int = 0
    count_B_Int = 0
    motor_PinValue_Digital_Old_Int = 0
    motor_PinValue_Digital_Now_Int = 0
    _system_Cpu_Delay_msec_Int = 100
}
if (true) {
    quest_Note_5.quest_Show_String_For_Note_Small_Fn(
    "See if speed improves with no serial prints"
    )
}
if (true) {
    quest_Note_4.quest_Show_String_For_Note_Small_Fn(
    "Needed.  :)+ or anadlog read of p0,p1 will 0"
    )
    quest_Note_4.quest_Show_String_For_Note_Small_Fn(
    "Quadrature outputs A and B (yellow and white wires) are digital signals that are either driven low (0 V) by the sensors or pulled to VCC through 10 kΩ pull-up resistors (Reverse/Inverted Polority: Lo = On, Hi = Off) [https://www.pololu.com/product/4761]"
    )
    pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
}
basic.forever(function () {
	
})
basic.forever(function () {
    wuKong.setAllMotor(motor_Power_Left_Int, 0)
})
