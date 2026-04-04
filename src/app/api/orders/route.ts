import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      customerName,
      customerPhone,
      customerEmail,
      items,
      totalAmount,
      specialInstructions,
      locale,
    } = body

    const orderId = `CHO-${Date.now().toString().slice(-6)}`
    const orderNumber = orderId

    const order = {
      id: uuidv4(),
      orderNumber,
      customerName,
      customerPhone,
      customerEmail: customerEmail || '',
      items,
      totalAmount,
      specialInstructions: specialInstructions || '',
      paymentMethod: 'Cash on Pickup',
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      restaurantAddress: 'Leyweg 986, 2545 GW Den Haag',
      estimatedPickup: 'Approximately 30-45 minutes',
      locale,
    }

    // GHL WEBHOOK -- connect later
    // const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL
    // if (GHL_WEBHOOK_URL) {
    //   await fetch(GHL_WEBHOOK_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       contact: {
    //         name: customerName,
    //         phone: customerPhone,
    //         email: customerEmail,
    //       },
    //       order: {
    //         orderNumber,
    //         items,
    //         totalAmount,
    //         paymentMethod: 'Cash on Pickup',
    //         specialInstructions,
    //       },
    //       tags: ['online-order', 'pickup'],
    //     }),
    //   })
    // }

    return NextResponse.json({
      success: true,
      orderNumber,
      order,
    })
  } catch (error) {
    console.error('Order error:', error)
    return NextResponse.json(
      { success: false, error: 'Order failed' },
      { status: 500 }
    )
  }
}
