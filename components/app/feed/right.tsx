import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { recentActivity } from '@/utils/constants/feed'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import Image from 'next/image'
import React from 'react'

const Right = () => {
    return (
        <div className="hidden bg-cardBg min-h-[90vh] rounded-2xl md:w-full md:block mx-5">
            <Card className=" border-none p-2 h-fit rounded-xl">
                <CardHeader>
                    <h3 className="text-lg text-primaryColor">Communitues to check out</h3>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[calc(100vh-250px)]">
                        <div className="space-y-4">
                            {recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-start rounded-xl hover:transition-all hover:scale-110 justify-between bg-primaryColor/15 p-2 hover:duration-300 hover:ease-in-out">
                                    <div className="flex items-center space-x-3 p-2">
                                        <Avatar className="h-10 w-10 bg-black  rounded-full justify-center items-center text-center flex-col">
                                            <AvatarImage src={activity.image} sizes="fit" alt='image' className=' border-2 border-primaryColor rounded-full' />
                                            <AvatarFallback className=' flex text-center items-center justify-center'>{activity.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-sm">{activity.name}</p>
                                            <p className="text-xs text-gray-400">{activity.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start space-y-1 p-2">
                                        <Button className=" bg-primaryColor hover:bg-primaryColor/80 text-white px-2 text-xs" >Join Group</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>


        </div >
    )
}

export default Right
